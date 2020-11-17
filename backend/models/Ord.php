<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "ord".
 *
 * @property int $id
 * @property string|null $user_info
 * @property string|null $address_data
 * @property int|null $total_price
 * @property int|null $delivery_price
 * @property string|null $payment_method
 * @property string|null $payment_status
 * @property string|null $other
 * @property string|null $status
 * @property string|null $cart_list
 * @property string|null $date_create
 * @property int|null $restaurant_id
 */
class Ord extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'ord';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_info', 'address_data', 'payment_method', 'payment_status', 'other', 'status', 'cart_list'], 'string'],
            [['total_price', 'delivery_price', 'restaurant_id'], 'integer'],
            [['date_create'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_info' => 'User Info',
            'address_data' => 'Address Data',
            'total_price' => 'Total Price',
            'delivery_price' => 'Delivery Price',
            'payment_method' => 'Payment Method',
            'payment_status' => 'Payment Status',
            'other' => 'Other',
            'status' => 'Status',
            'cart_list' => 'Cart List',
            'date_create' => 'Date Create',
            'restaurant_id' => 'Restaurant ID',
        ];
    }
}
