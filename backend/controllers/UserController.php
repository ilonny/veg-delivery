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
class UserController extends Controller
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
            'hello' => 'user endpoint is welcome for you'
        ]);
    }

    public function actionLogin()
    {
        $password = $_POST['password'];
        $login = $_POST['login'];
        $model = new LoginForm();
        $model->username = $login;
        $model->password = $password;
        $model->rememberMe = true;   
        if ($model->login()) {
            $userInfo = Yii::$app->user->identity;
            return $this->asJson([
                'status' => 200,
                'userInfo' => [
                    'id' => $userInfo->id,
                    'username' => $userInfo->username,
                    'email' => $userInfo->email,
                    'role' => $userInfo->role,
                ]
            ]);
        } else {
            $model->password = '';
            return $this->asJson([
                'status' => 403,
                'message' => 'Неправильный логин или пароль',
            ]);
        }
        // $identity=new UserIdentity($username,$password);
        // if($identity->authenticate())
        //     Yii::app()->user->login($identity);
        // else
        //     echo $identity->errorMessage;
    }

}