<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "discount".
 *
 * @property int $id
 * @property string|null $type
 * @property string|null $name
 * @property string|null $promocode
 * @property int|null $restaurant_id
 * @property string|null $items
 * @property string|null $time_start
 * @property string|null $time_end
 * @property string|null $other
 * @property int|null $active
 * @property string|null $description
 * @property string|null $price_start
 * @property string|null $discount_value
 */
class Discount extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'discount';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['type', 'name', 'promocode', 'items', 'other', 'description', 'price_start', 'discount_value'], 'string'],
            [['restaurant_id', 'active'], 'integer'],
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
            'type' => 'Type',
            'name' => 'Name',
            'promocode' => 'Promocode',
            'restaurant_id' => 'Restaurant ID',
            'items' => 'Items',
            'time_start' => 'Time Start',
            'time_end' => 'Time End',
            'other' => 'Other',
            'active' => 'Active',
            'description' => 'Description',
            'price_start' => 'Price Start',
            'discount_value' => 'Discount Value',
        ];
    }
}
