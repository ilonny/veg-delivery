<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "item".
 *
 * @property int $id
 * @property int $restaurant_id
 * @property int $menu_category_id
 * @property string $name
 * @property string|null $description
 * @property string|null $weight
 * @property string $price
 * @property int|null $parent_id
 * @property string|null $image
 * @property int $active
 * @property string|null $modificators
 * @property string|null $moderate
 */
class Item extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'item';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['restaurant_id', 'menu_category_id', 'name', 'price'], 'required'],
            [['restaurant_id', 'menu_category_id', 'parent_id', 'active'], 'integer'],
            [['name', 'description', 'weight', 'price', 'image', 'modificators', 'moderate'], 'string'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'restaurant_id' => 'Restaurant ID',
            'menu_category_id' => 'Menu Category ID',
            'name' => 'Name',
            'description' => 'Description',
            'weight' => 'Weight',
            'price' => 'Price',
            'parent_id' => 'Parent ID',
            'image' => 'Image',
            'active' => 'Active',
            'modificators' => 'Modificators',
            'moderate' => 'Moderate',
        ];
    }
}
