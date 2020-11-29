<?php
namespace backend\controllers;

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
/**
 * Category controller
 */
class OrderController extends Controller
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