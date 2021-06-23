<?php
namespace backend\controllers;
error_reporting(E_ERROR | E_PARSE);

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
use backend\models\Ord;
use yii\web\UploadedFile;
use yii\helpers\Json;
use yii\web\Response;
use DateTime;
use yii\filters\Cors;
use yii\filters\auth\HttpBasicAuth;
use common\models\User;


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
            $user_id = Yii::$app->user->id;
            if (!$user_id) {
                $user_id = intval($_POST['user_id']);
            }
            $model = new Restaurant;
            $model->name = $_POST['name'];
            $model->description = $_POST['description'];
            $model->address_json = $_POST['address'];
            if ($_POST['delivery_radius']) {
                $model->delivery_radius = $_POST['delivery_radius'];
            } else {
                $model->delivery_radius = "0";
            }
            $model->active = $_POST['active'] === 'true' ? '1' : '0';
            $model->user_id = $user_id;
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
                if ($model->validate()) {
                    // все данные корректны
                } else {
                    // данные не корректны: $errors - массив содержащий сообщения об ошибках
                    $errors = $model->errors;
                    var_dump($errors);
                }
                return json_encode([
                    'status' => 500,
                    'message' => 'Ошибка сервера, не удалось сохранить',
                ]);
            }
        }
    }

    public function actionList($token = '', $user = '') {
        $res = [];
        // var_dump(Yii::$app->user->id);
        $user_id = Yii::$app->user->id;
        if (!$user_id) {
            $user_id = intval($user);
        }
        $user_model = User::findOne($user_id);
        if ($token && $token == 'ZWmGuABp3N6' || ($user_id === 1)) {
            $res = Restaurant::find()->all();
        } else {
            if ($user_model->role == 'manager') {
                $res = Restaurant::find()->andWhere(['id' => $user_model->restaurant_id])->all();
            } else {
                $res = Restaurant::find()->andWhere(['user_id' => $user_id])->all();
            }
        }
        return $this->asJson($res);
    }

    public function getDistanceBetweenPointsNew($latitude1, $longitude1, $latitude2, $longitude2) {
        $theta = $longitude1 - $longitude2;
        $miles = (sin(deg2rad($latitude1)) * sin(deg2rad($latitude2))) + (cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * cos(deg2rad($theta)));
        $miles = acos($miles);
        $miles = rad2deg($miles);
        $miles = $miles * 60 * 1.1515;
        $feet = $miles * 5280;
        $yards = $feet / 3;
        $kilometers = $miles * 1.609344;
        $meters = $kilometers * 1000;
        return $kilometers;
        // return compact('miles','feet','yards','kilometers','meters'); 
    }


    public function actionMobileList($lat = '', $lon = '') {
        date_default_timezone_set('Europe/Moscow');
        $res = [];
        $rest_all = Restaurant::find()->andWhere(['active' => '1'])->asArray()->all();
        $R=6371;  // Earth's radius
        
        foreach ($rest_all as $key => $rest) {
            $current_time = date('H:m:s');
            // var_dump($rest['time_start']);
            // var_dump($rest['time_end']);
            // var_dump($current_time);
            // die();
            if ($current_time >= $rest['time_start'] && $current_time <= $rest['time_end']) {
                $rest_address = json_decode($rest['address_json'], true);
                $rest_lat = floatval($rest_address['data']['geo_lat']);
                $rest_lon = floatval($rest_address['data']['geo_lon']);
                $rest_radius = floatval($rest['delivery_radius']);
                $lat = floatval($lat);
                $lon = floatval($lon);
                $sin1=sin(($rest_lat - $lat) / 2);
                $sin2=sin(($rest_lon - $lon) / 2);
                
                // $direction_length = 2 * $R * asin(sqrt($sin1 * $sin1 + $sin2 * $sin2 * cos($rest_lat) * cos($lat)));
                // var_dump($direction_length);
                // var_dump($this->getDistanceBetweenPointsNew($rest_lat, $rest_lon, $lat, $lon));
                $direction_length = $this->getDistanceBetweenPointsNew($rest_lat, $rest_lon, $lat, $lon);

                //проверка работает ли в данное время ресторан
                
                // var_dump($rest['time_start']);
                // var_dump($rest['time_end']);
                // var_dump($current_time);
                // die();
            
                if ($direction_length <= $rest_radius) {
                    ///////
                        $res_menu = [];
                        $rest_categories = MenuCategory::find()->andWhere(['restaurant_id' => $rest['id']])->orderBy('order_by')->all();
                        $modificators = Modificator::find()
                            ->andWhere(['restaurant_id' => $rest['id']])
                            ->andWhere(['parent_id' => null])
                            ->all();
                        foreach ($rest_categories as $key => $value) {
                            $menu_arr = Item::find()
                                ->andWhere([
                                    'menu_category_id' => $value->id,
                                    'active' => 1,
                                    'moderate' => '1',
                                ])
                                ->asArray()
                                ->all();
                            if (count($menu_arr)) {
                                array_push($res_menu, [
                                    'id' => $value->id,
                                    'name' => $value->name,
                                    'order_by' => $value->order_by,
                                    'restaurant_id' => $value->restaurant_id,
                                    'menu' => Item::find()->andWhere(['menu_category_id' => $value->id])->asArray()->all(),
                                ]);
                            }
                            foreach ($res_menu[$key]['menu'] as $key_dish => $dish) {
                                $modificators_ids = explode(',', $dish['modificators']);
                                // $res_menu[$key]['menu'][$key_dish] = (array) $res_menu[$key]['menu'][$key_dish];
                                $res_menu[$key]['menu'][$key_dish]['modificators_info'] = [];
                                foreach ($modificators_ids as $modif_key => $modif_parent_id) {
                                    $res_menu[$key]['menu'][$key_dish]['modificators_info'][$modif_key] = Modificator::find()->where(['id' => $modif_parent_id])->asArray()->one();
                                    $res_menu[$key]['menu'][$key_dish]['modificators_info'][$modif_key]['variants'] = 
                                        Modificator::find()
                                            ->andWhere(['parent_id' => $modif_parent_id])
                                            ->asArray()
                                            ->all();
                                }
                                    // $res[$key]['menu'][$key_dish]['modificators_info'] = Modificator::find()
                                    // ->andWhere(['restaurant_id' => $rest['id']])
                                    // ->andWhere(['parent_id' => $dish->id])
                                    // ->all();
                            }
                        }
                    $rest['menu'] = $res_menu;
                    ///////
                    array_push($res, $rest);
                }
            }
        }
        foreach ($res as $key => $rest_inner) {
            $res[$key]['delivery_data'] =
                RestaurantDelivery::find()
                    ->where(['restaurant_id' => $rest_inner['id']])
                    ->asArray()
                    ->all();
        }
        return $this->asJson($res);
    }

    public function actionGetData($id) {
        $res = Restaurant::find()->andWhere(['id' => $id])->asArray()->one();
        $res_menu = [];
        $rest_categories = MenuCategory::find()->andWhere(['restaurant_id' => $res['id']])->orderBy('order_by')->all();
        $modificators = Modificator::find()
            ->andWhere(['restaurant_id' => $rest['id']])
            ->andWhere(['parent_id' => null])
            ->all();
        foreach ($rest_categories as $key => $value) {
            $menu_arr = Item::find()
                ->andWhere([
                    'menu_category_id' => $value->id,
                    'active' => 1,
                    'moderate' => '1',
                ])
                ->asArray()
                ->all();
            if (count($menu_arr)) {
                array_push($res_menu, [
                    'id' => $value->id,
                    'name' => $value->name,
                    'order_by' => $value->order_by,
                    'restaurant_id' => $value->restaurant_id,
                    'menu' => Item::find()->andWhere(['menu_category_id' => $value->id])->asArray()->all(),
                ]);
            }
            foreach ($res_menu[$key]['menu'] as $key_dish => $dish) {
                $modificators_ids = explode(',', $dish['modificators']);
                // $res_menu[$key]['menu'][$key_dish] = (array) $res_menu[$key]['menu'][$key_dish];
                $res_menu[$key]['menu'][$key_dish]['modificators_info'] = [];
                foreach ($modificators_ids as $modif_key => $modif_parent_id) {
                    $res_menu[$key]['menu'][$key_dish]['modificators_info'][$modif_key] = Modificator::find()->where(['id' => $modif_parent_id])->asArray()->one();
                    $res_menu[$key]['menu'][$key_dish]['modificators_info'][$modif_key]['variants'] = 
                        Modificator::find()
                            ->andWhere(['parent_id' => $modif_parent_id])
                            ->asArray()
                            ->all();
                }
                    // $res[$key]['menu'][$key_dish]['modificators_info'] = Modificator::find()
                    // ->andWhere(['restaurant_id' => $rest['id']])
                    // ->andWhere(['parent_id' => $dish->id])
                    // ->all();
            }
        }
        $res['menu'] = $res_menu;
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
                'menu' => Item::find()->andWhere(['menu_category_id' => $value->id])->asArray()->all(),
            ]);
            foreach ($res[$key]['menu'] as $key_dish => $dish) {
                $modificators_ids = explode(',', $dish['modificators']);
                // $res[$key]['menu'][$key_dish] = (array) $res[$key]['menu'][$key_dish];
                $res[$key]['menu'][$key_dish]['modificators_info'] = [];
                foreach ($modificators_ids as $modif_key => $modif_parent_id) {
                    $res[$key]['menu'][$key_dish]['modificators_info'][$modif_key] = Modificator::find()->where(['id' => $modif_parent_id])->asArray()->one();
                    $res[$key]['menu'][$key_dish]['modificators_info'][$modif_key]['variants'] = 
                        Modificator::find()
                            ->andWhere(['parent_id' => $modif_parent_id])
                            ->asArray()
                            ->all();
                }
                    // $res[$key]['menu'][$key_dish]['modificators_info'] = Modificator::find()
                    // ->andWhere(['restaurant_id' => $_POST['rest_id']])
                    // ->andWhere(['parent_id' => $dish->id])
                    // ->all();
            }
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
            $user_id = Yii::$app->user->id;
            $user = User::findOne($user_id);

            $model = new Item;
            if ($user->role == 'admin') {
                $model->moderate = 1;
            }
            $model->restaurant_id = $_POST['rest_id'];
            $model->menu_category_id = $_POST['category_id'];
            $model->name = $_POST['name'];
            $model->description = $_POST['description'];
            $model->weight = $_POST['weight'];
            $model->price = $_POST['price'];
            // $model->active = $_POST['active'] === 'true' ? 1 : 0;
            if (isset($_FILES['file'])) {
                try {
                    $uploadFormModel = new UploadForm();
                    $uploadDir = $uploadFormModel->getUploadName($model->name, $_FILES['file']['name']);
                    move_uploaded_file($_FILES['file']['tmp_name'], $uploadDir);
                    $model->image = $uploadDir;
                } catch (Exception $e) {}
            }
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
        $user_id = Yii::$app->user->id;
        $user = User::findOne($user_id);
        if ($user->role != 'admin') {
            $item->moderate = null;
        }
        $item->update();
    }

    public function actionDeleteItem($id) {
        $item = Item::findOne($id);
        $item->delete();
    }

    public function actionChangeItemImage($id) {
        $item = Item::findOne($id);
        $user_id = Yii::$app->user->id;
        $user = User::findOne($user_id);
        if ($user->role != 'admin') {
            $item->moderate = null;
        }
        $uploadFormModel = new UploadForm();
        $uploadDir = $uploadFormModel->getUploadName($item->name, $_FILES['file']['name']);
        move_uploaded_file($_FILES['file']['tmp_name'], $uploadDir);
        $item->image = $uploadDir;
        $item->update();
    }

    public function actionChangeRestImage($id) {
        $item = Restaurant::findOne($id);
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

    public function actionEditRestDesc($id, $value) {
        $model = Restaurant::findOne($id);
        $model->description = $value;
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

    public function actionEditRestName($id, $value) {
        $model = Restaurant::findOne($id);
        $model->name = $value;
        if ($model->update()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionEditRestAddress($id, $value) {
        $model = Restaurant::findOne($id);
        $model->address_json = urldecode($value);
        if ($model->update()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionEditRestImage($id) {
        $model = Restaurant::findOne($id);
        $uploadFormModel = new UploadForm();
        $uploadDir = $uploadFormModel->getUploadName($model->name, $_FILES['file']['name']);
            if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadDir)) {
            } else {
            }
        $model->image = $uploadDir;
        if ($model->update()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
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

    public function actionEditRestDeliverytime($id, $time) {
        $model = Restaurant::findOne($id);
        $model->delivery_time = $time;
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

    public function actionGetOrderList($restaurant_id) {
        return $this->asJson(Ord::find()
            ->andWhere([
                'restaurant_id' => $restaurant_id,
            ])
            ->andWhere([
                'or',
                ['payment_status' => 'success'],
                ['payment_status' => 'refunded'],
            ])
            ->orderBy('id DESC')
            ->all()
        );
    }

    public function actionUserAdd() {
        $user = new User();
        $user->username = $_POST['login'];
        $user->role = 'user';
        $user->email = $_POST['email'] || '';
        $user->setPassword($_POST['password']);
        $user->generateAuthKey();
        $user->generateEmailVerificationToken();
        if ($user->save()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionCopy($id) {
        $original_rest = Restaurant::findOne($id);
        $new_rest = new Restaurant();
        $rest_attributes = $original_rest->attributes;
        $new_rest->setAttributes($rest_attributes);
        $new_rest->save();
        // var_dump($new_rest);
        // $new_rest->name
        // echo '<pre>';
        // var_dump($new_rest->id);
        // echo '</pre>';

        $new_rest_id = $new_rest->id;

        $menu_categories_original = MenuCategory::find()->andWhere(['restaurant_id' => $original_rest->id])->all();

        foreach ($menu_categories_original as $key_menu_cat_orig => $menu_cat_orig) {
            // var_dump($menu_cat_orig);
            $new_category = new MenuCategory();
            $category_attributes = $menu_cat_orig->attributes;
            $new_category->setAttributes($category_attributes);
            $new_category->restaurant_id = $new_rest_id;
            $new_category->save();
            $new_category_id = $new_category->id;

            $orig_items = Item::find()->andWhere(['menu_category_id' => $menu_cat_orig->id])->all();

            foreach ($orig_items as $key_orig_item => $orig_item) {
                $new_item = new Item();
                $item_attributes = $orig_item->attributes;
                $new_item->setAttributes($item_attributes);
                $new_item->restaurant_id = $new_rest_id;
                $new_item->menu_category_id = $new_category_id;
                $new_item->save();
            }
        }
        $rest_delivery_orig = RestaurantDelivery::find()->andWhere(['restaurant_id' => $original_rest])->all();
        foreach ($rest_delivery_orig as $key => $rest_delivery_orig) {
            $new_rest_delivery = new RestaurantDelivery();
            $rest_delivery_attributes = $rest_delivery_orig->attributes;
            $new_rest_delivery->setAttributes($rest_delivery_attributes);
            $new_rest_delivery->restaurant_id = $new_rest_id;
            $new_rest_delivery->save();
        }
        return $this->asJson(['status' => 200]);
    }


    public function actionDelete($id) {
        $original_rest = Restaurant::findOne($id);
        if ($original_rest->delete()) {
            return $this->asJson(['status' => 200]);
        }
        return $this->asJson(['status' => 500]);
    }

    

    public function actionManagerAdd() {
        $user = new User();
        $user->role = 'manager';
        $user->username = $_POST['login'];
        // var_dump($_POST['email']);
        // die();
        $user->email = $_POST['email'] ? $_POST['email'] : '';
        $user->restaurant_id = $_POST['rest_id'] ? $_POST['rest_id'] : '';
        $user->setPassword($_POST['password']);
        $user->generateAuthKey();
        $user->generateEmailVerificationToken();
        if ($user->save()) {
            return $this->asJson([
                'status' => 200
            ]);
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionGetManagerList($restaurant_id) {
        $users = User::find()->andWhere(['restaurant_id' => $restaurant_id, 'role' => 'manager'])->all();
        $res = [];
        foreach ($users as $key => $user) {
            $res[$key]['id'] = $user->id;
            $res[$key]['login'] = $user->username;
        }
        return $this->asJson($res);
    }

    public function actionManagerDelete($id) {
        $user = User::findOne($id);
        if ($user->delete()) {
            return $this->asJson([
                'status' => 200
            ]);   
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

    public function actionGetModerateList() {
        // $user_id = Yii::$app->user->id;
        // if (!user_id) {

        // }
        // $user = User::findOne($user_id);
        // var_dump($user_id);
        // if ($user->role == 'admin') {
        // } else {
        //     return $this->asJson([1=>2]);
        // }
        $res = [];
        $items = Item::find()->andWhere(['moderate' => null])->asArray()->all();
        foreach ($items as $key => $item) {
            $items[$key]['restaurant'] = Restaurant::find(['id' => $item['restaurant_id']])->asArray()->one();
        }
        // var_dump($items);   
        return $this->asJson($items);
    }

    public function actionApproveItem($id) {
        // $user_id = Yii::$app->user->id;
        // $user = User::findOne($user_id);
        // var_dump($user_id);
        // if ($user->role == 'admin') {
        // } else {
        //     return $this->asJson([1=>2]);
        // }
        $item = Item::findOne($id);
        $item->moderate = '1';
        if ($item->update()) {
            return $this->asJson([
                'status' => 200
            ]);   
        }
        return $this->asJson([
            'status' => 500
        ]);
    }

}