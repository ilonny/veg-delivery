<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "restaurant".
 *
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property string $address_json
 * @property string $image
 * @property string $delivery_radius
 * @property string|null $active
 * @property string|null $time_start
 * @property string|null $time_end
 * @property string|null $restaurant_info
 * @property string|null $min_price
 * @property string|null $delivery_time
 */
class Restaurant extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'restaurant';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'address_json', 'image', 'delivery_radius'], 'required'],
            [['name', 'description', 'address_json', 'image', 'delivery_radius', 'active', 'restaurant_info', 'min_price', 'delivery_time'], 'string'],
            [['time_start', 'time_end'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'description' => 'Description',
            'address_json' => 'Address Json',
            'image' => 'Image',
            'delivery_radius' => 'Delivery Radius',
            'active' => 'Active',
            'time_start' => 'Time Start',
            'time_end' => 'Time End',
            'restaurant_info' => 'Restaurant Info',
            'min_price' => 'Min Price',
            'delivery_time' => 'Delivery Time',
        ];
    }
}
