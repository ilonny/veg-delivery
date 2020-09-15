<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "restaurant_delivery".
 *
 * @property int $id
 * @property int $restaurant_id
 * @property string $price
 * @property string|null $other
 * @property string|null $price_start
 */
class RestaurantDelivery extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'restaurant_delivery';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['restaurant_id', 'price'], 'required'],
            [['restaurant_id'], 'integer'],
            [['price', 'other', 'price_start'], 'string'],
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
            'price' => 'Price',
            'other' => 'Other',
            'price_start' => 'Price Start',
        ];
    }
}
