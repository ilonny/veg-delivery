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
use backend\models\MenuCategory;
use backend\models\Item;
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
        $res = [];
        if ($token && $token == 'ZWmGuABp3N6') {
            $res = Restaurant::find()->all();
        }
        return $this->asJson($res);
    }

    public function actionGetData($id) {
        $res = Restaurant::findOne($id);
        return $this->asJson($res);
    }

    public function actionCreateCategoryMenu() {
        $model = new MenuCategory;
        $model->restaurant_id = $_POST['rest_id'];
        $model->name = $_POST['category_name'];
        if ($model->save()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionGetMenu() {
        $res = [];
        $rest_categories = MenuCategory::find()->andWhere(['restaurant_id' => $_POST['rest_id']])->orderBy('order_by')->all();
        foreach ($rest_categories as $key => $value) {
            array_push($res, [
                'id' => $value->id,
                'name' => $value->name,
                'order_by' => $value->order_by,
                'restaurant_id' => $value->restaurant_id,
                'menu' => Item::find()->andWhere(['menu_category_id' => $value->id])->all()
            ]);
        }
        return $this->asJson($res);
    }

    public function actionChangeRestCategoryOrder($id, $value) {
        $category = MenuCategory::findOne($id);
        $category->order_by = $value;
        $category->update();
    }

    public function actionDeleteRestCategory($id) {
        $category = MenuCategory::findOne($id);
        $category->delete();
    }


    public function actionAddItem() {
        if (Yii::$app->request->isPost) {
            $model = new Item;
            $model->restaurant_id = $_POST['rest_id'];
            $model->menu_category_id = $_POST['category_id'];
            $model->name = $_POST['name'];
            $model->description = $_POST['description'];
            $model->weight = $_POST['weight'];
            $model->price = $_POST['price'];
            // $model->active = $_POST['active'] === 'true' ? 1 : 0;
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

    public function actionChangeItem($id, $key, $value) {
        $item = Item::findOne($id);
        $item->{$key} = $value; 
        $item->update();
    }
    public function actionChangeItemImage($id) {
        $item = Item::findOne($id);
        $uploadFormModel = new UploadForm();
        $uploadDir = $uploadFormModel->getUploadName($item->name, $_FILES['file']['name']);
        move_uploaded_file($_FILES['file']['tmp_name'], $uploadDir);
        $item->image = $uploadDir;
        $item->update();
    }
}