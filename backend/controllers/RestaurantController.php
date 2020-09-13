<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\helpers\ArrayHelper;
use common\models\LoginForm;
use backend\models\UploadForm;
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
class RestaurantController extends Controller
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
            'hello' => 'restaurant endpoint, can i help?'
        ]);
    }

    public function actionAdd()
    {
        if (Yii::$app->request->isPost) {
            $model = new Restaurant;
            $model->name = $_POST['name'];
            $model->description = $_POST['description'];
            $model->address_json = $_POST['address'];
            $model->delivery_radius = $_POST['delivery_radius'];
            $model->active = $_POST['active'] === 'true' ? 1 : 0;
            $uploadFormModel = new UploadForm();
            $uploadDir = $uploadFormModel->getUploadName($model->name, $_FILES['file']['name']);
            if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadDir)) {
            } else {
            }
            $model->image = $uploadDir;
            if ($model->save()) {
                return json_encode([
                    'status' => 200,
                    'message' => 'Успешно сохранено',
                ]);
            } else {
                return json_encode([
                    'status' => 500,
                    'message' => 'Ошибка сервера, не удалось сохранить',
                ]);
            }
        }
    }

    public function actionList($token = '') {
        // var_dump($token);die();
        $res = [];
        if ($token && $token == 'ZWmGuABp3N6') {
            $res = Restaurant::find()->all();
        }
        // \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        // var_dump($res);die();
        return $this->asJson($res);
        // return json_encode([
        //     'restaurants' => json_encode($res, JSON_UNESCAPED_UNICODE)
        // ]);
    }
}