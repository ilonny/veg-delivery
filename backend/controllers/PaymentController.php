<?php
namespace backend\controllers;
error_reporting(E_ERROR | E_PARSE);

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\helpers\ArrayHelper;
use common\models\LoginForm;
use backend\models\Category;
use backend\models\Size;
use backend\models\Product;
use backend\models\UploadForm;
use backend\models\Color;
use backend\models\Ord;
use backend\models\Restaurant;
use yii\web\UploadedFile;
use yii\helpers\Json;
use yii\web\Response;
use DateTime;
use yii\filters\Cors;
use yii\filters\auth\HttpBasicAuth;
use backend\components\tinkoff\TinkoffMerchantAPI;
/**
 * Category controller
 */
class PaymentController extends Controller
{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Access-Control-Allow-Origin' => ['*'],
                'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                'Access-Control-Request-Headers' => ['*'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 86400,
                'Access-Control-Expose-Headers' => [],
            ]
        ];
        return $behaviors;
    }
    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex($category_id = 0)
    {
        return Json::encode([
            'hello' => 'can i help?'
        ]);
    }

    public function actionInitPay($order_id) {
        $order = Ord::findOne($order_id);
        $userInfo = json_decode($order->user_info, true);
        $userPhone = preg_replace('/[^0-9]/', '', $userInfo['phone']);
        $orderItems = json_decode($order->cart_list, true);
        $receiptItems = [];
        foreach ($orderItems as $orderItem) {
            array_push($receiptItems, [
                'Name' => $orderItem['name'],
                'Quantity' => intval($orderItem['count']),
                'Amount' => intval($orderItem['price']) * intval($orderItem['count']) * 100,
                'Price' => intval($orderItem['price']) * 100,
                'Tax' => 'none',
            ]);
        }
        if ($order->delivery_price) {
            array_push($receiptItems, [
                'Name' => 'Доставка',
                'Quantity' => 1,
                'Amount' => intval($order->delivery_price) * 100,
                'Price' => intval($order->delivery_price) * 100,
                'Tax' => 'none',
            ]);
        }
        if ($userPhone[0] != 9) {
            $userPhone = mb_substr($userPhone, 1, 10);
        }
        $api = new TinkoffMerchantAPI(
            '1609226746243DEMO',  //Ваш Terminal_Key
            'ka2tkc1400rxwcog'   //Ваш Secret_Key
            //'1609226746243',
            //'jmicoygwkbooxabj'   //Ваш Secret_Key
        );
        
        $params = [
            'OrderId' => intval($order_id),
            'Amount'  => (intval($order->total_price) + intval($order->delivery_price)) * 100,
            'DATA'    => [
                'Email'           => $userInfo['email'],
                // 'Phone' => preg_replace('/((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/', '', $userInfo['phone']),
                'Phone' => $userPhone,
                'Connection_type' => 'example'
            ],
            'SuccessURL' => 'http://'.$_SERVER['HTTP_HOST'].'/payment/success?order_id='.$order_id,
            'FailURL' => 'http://'.$_SERVER['HTTP_HOST'].'/payment/fail?order_id='.$order_id,
        ];
        $params['Receipt'] = [
            'Email' => $userInfo['email'],
            'Phone' => $userPhone,
            'Taxation' => 'osn',
            'Items' => $receiptItems,
        ];
        // if ($enabledTaxation) {
        // }
        $token = hash('sha256', $params['Amount'].$params['OrderId'].$api->secretKey.$api->terminalKey);
        $params['Token'] = $token;
        $api->init($params);
        // echo '<pre>';
            // var_dump($params);
            // var_dump($api->response);
        // echo '</pre>';
        $res = html_entity_decode($api->response);
        $order->other = $res;
        $order->update();
        return html_entity_decode($res);
    }

    public function actionSuccess($order_id) {
        $order = Ord::findOne($order_id);
        $order->payment_status = 'success';
        $order->update();
        return '
            <div style="display: flex; justify-content: center; align-items: center">
                <h2>Успешная оплата</h2>
            </div>
            <script>
                setTimeout(() => {
                    console.log("payment has been succeeded");
                    window.ReactNativeWebView.postMessage("success");
                }, 500);
            </script>
        ';
    }

    public function actionFail($order_id) {
        // $order = Ord::findOne($order_id);
        // $order->payment_status = 'success';
        // $order->update();
        return '
            <div style="display: flex; justify-content: center; align-items: center">
                <h2>Оплата не удалась</h2>
            </div>
            <script>
                setTimeout(() => {
                    console.log("payment has been unlucky");
                    window.ReactNativeWebView.postMessage("error");
                }, 500);
            </script>
        ';
    }

    public function actionCancel($order_id) {
        $api = new TinkoffMerchantAPI(
            '1609226746243DEMO',  //Ваш Terminal_Key
            'ka2tkc1400rxwcog'   //Ваш Secret_Key
            //'1609226746243',
            //'jmicoygwkbooxabj'   //Ваш Secret_Key
        );
        $order = Ord::findOne($order_id);
        $paymentData = json_decode($order->other, true);
        $PaymentId = $paymentData['PaymentId'];
        $token = hash('sha256', $paymentData['Amount'].$paymentData['OrderId'].$api->secretKey.$api->terminalKey);
        $params = [
            'PaymentId' => $PaymentId,
            'Amount' => intval($paymentData['Amount']),
            // 'Token' => $token
        ];
        $api->cancelPayment($params);
        $res = html_entity_decode($api->response);
        $res_arr = json_decode($res, true);
        if ($res_arr['Success']) {
            $order->payment_status = 'refunded';
            $order->other = $res;
            $order->update();
        }
        return ($res);
        // var_dump($api->response);

    }
    public function actionCreate() {
        // var_dump('$_REQUEST');die();
        // var_dump($_REQUEST);die();
        date_default_timezone_set('Europe/Moscow');
        $request = Yii::$app->request;
        $post = $request->post('data'); 
        $post_arr = json_decode($post, true);
        $model = new Ord;
        $model->user_info = (json_encode($post_arr['userInfo'], JSON_UNESCAPED_UNICODE));
        $model->address_data = (json_encode($post_arr['addressData'], JSON_UNESCAPED_UNICODE));
        $model->cart_list = (json_encode($post_arr['cartList'], JSON_UNESCAPED_UNICODE));
        
        $model->total_price = ($post_arr['totalPrice']);
        $model->delivery_price = ($post_arr['deliveryPrice']);
        $model->restaurant_id = intval($post_arr['restaurant_id']);

        $model->status = 'Новый';
        $rest = Restaurant::find()->andWhere(['id' => intval($post_arr['restaurant_id'])])->asArray()->one();
        $current_time = date('H:m:s');
        if (!($current_time >= $rest['time_start'] && $current_time <= $rest['time_end'])) {
            return $this->asJson([
                'status' => 500,
                'message' => 'К сожалению, ресторан уже закрыт.'
            ]);
        }
        if ($model->save()) {
            $rest_data = Restaurant::findOne($model->restaurant_id);
            return $this->asJson([
                'status' => 200,
                'message' => 'Заказ успешно создан.',
                'orderInfo' => $model,
                'restInfo' => $rest_data,
                'date_create' => date('d.m.y H:i'),
            ]);    
        }
        return $this->asJson([
            'status' => 500,
            'message' => 'Возникла внутренняя ошибка сервера. Попробуйте позже.'
        ]);
    }

    
}