<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "restaurant".
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $address_json
 * @property string $image
 * @property string $delivery_radius
 * @property string|null $active
 * @property string|null $time_start
 * @property string|null $time_end
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
            [['name', 'description', 'address_json', 'image', 'delivery_radius'], 'required'],
            [['name', 'description', 'address_json', 'image', 'delivery_radius', 'active'], 'string'],
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
        ];
    }
}
