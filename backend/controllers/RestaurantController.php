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
use backend\models\Modificator;
use backend\models\RestaurantDelivery;
use backend\models\Discount;
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
            $model->active = $_POST['active'] === 'true' ? '1' : '0';
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
        $modificators = Modificator::find()
            ->andWhere(['restaurant_id' => $_POST['rest_id']])
            ->andWhere(['parent_id' => null])
            ->all();
        foreach ($rest_categories as $key => $value) {
            array_push($res, [
                'id' => $value->id,
                'name' => $value->name,
                'order_by' => $value->order_by,
                'restaurant_id' => $value->restaurant_id,
                'menu' => Item::find()->andWhere(['menu_category_id' => $value->id])->all(),
            ]);
        }
        return $this->asJson([
            'menu' => $res,
            'modificators' => $modificators
        ]);
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

    public function actionCreateRestModif() {
        $model = new Modificator;
        $model->restaurant_id = $_POST['rest_id'];
        $model->name = $_POST['name'];
        $model->type = $_POST['type'];
        $model->parent_id = $_POST['parent_id'] == 'null' ? null : $_POST['parent_id'];
        if ($model->save()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionGetModifList($restaurant_id) {
        // $restaurant_id = $_POST['rest_id'];
        $res = [];
        $models = Modificator::find()
            ->andWhere(['restaurant_id' => $restaurant_id])
            ->andWhere(['parent_id' => null])->all();
        foreach ($models as $key => $value) {
            array_push($res, [
                'id' => $value->id,
                'name' => $value->name,
                'type' => $value->type,
                'restaurant_id' => $value->restaurant_id,
                'parent_id' => $value->parent_id,
                'list' => Modificator::find()->andWhere(['parent_id' => $value->id])->all()
            ]);
        }
        return $this->asJson($res);
    }

    public function actionCreateRestModifVariant() {
        $model = new Modificator;
        $model->restaurant_id = $_POST['rest_id'];
        $model->name = $_POST['name'];
        $model->price = $_POST['price'];
        $model->type = 'single';
        $model->parent_id = $_POST['parent_id'];
        if ($model->save()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionDeleteRestModif($id) {
        $model = Modificator::findOne($id);
        $model->delete();
    }

    public function actionEditRestRadius($id, $value) {
        $model = Restaurant::findOne($id);
        $model->delivery_radius = $value;
        $model->update();
    }

    public function actionEditRestMinPrice($id, $value) {
        $model = Restaurant::findOne($id);
        $model->min_price = $value;
        $model->update();
    }

    public function actionEditRestInfo($id, $value) {
        $model = Restaurant::findOne($id);
        $model->restaurant_info = $value;
        $model->update();
    }

    public function actionEditRestActive($id, $value) {
        $model = Restaurant::findOne($id);
        $model->active = $value;
        $model->update();
    }

    public function actionCreateRestDelivery() {
        $model = new RestaurantDelivery;
        $model->restaurant_id = $_POST['rest_id'];
        $model->price = $_POST['price'];
        $model->price_start = $_POST['price_start'];
        if ($model->save()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionGetDeliveryList($restaurant_id) {
        return $this->asJson(RestaurantDelivery::find()->andWhere(['restaurant_id' => $restaurant_id])->all());
    }

    public function actionEditDelivery($id, $key, $value) {
        $model = RestaurantDelivery::findOne($id);
        $model->{$key} = $value;
        $model->update();
    }
    public function actionDeleteDelivery($id) {
        $model = RestaurantDelivery::findOne($id);
        $model->delete();
    }

    public function actionEditRestTime($id, $start, $end) {
        $model = Restaurant::findOne($id);
        $model->time_start = $start;
        $model->time_end = $end;
        $model->validate();
        if ($model->update()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionGetDiscountList($restaurant_id) {
        return $this->asJson(Discount::find()->andWhere(['restaurant_id' => $restaurant_id])->all());
    }

    public function actionCreateRestDiscount() {
        $model = new Discount;
        $model->restaurant_id = $_POST['rest_id'];
        $model->name = $_POST['name'];
        $model->discount_value = $_POST['discount_value'];
        $model->type = $_POST['type'];
        $model->description = $_POST['description'];
        $model->promocode = $_POST['promocode'];
        $model->time_start = $_POST['time_start'];
        $model->time_end = $_POST['time_end'];
        $model->items = $_POST['items'];
        $model->price_start = $_POST['price_start'];
        // $model->name = $_POST['name'];
        if ($model->save()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionEditDiscount($id, $key, $value) {
        $model = Discount::findOne($id);
        $model->{$key} = $value;
        $model->update();
    }

    public function actionDeleteDiscount($id) {
        $model = Discount::findOne($id);
        $model->delete();
    }
}