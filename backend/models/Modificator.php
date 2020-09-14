<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "modificator".
 *
 * @property int $id
 * @property string $name
 * @property string $type
 * @property string|null $other
 * @property int|null $parent_id
 * @property int $restaurant_id
 * @property string|null $price
 */
class Modificator extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'modificator';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'type', 'restaurant_id'], 'required'],
            [['name', 'type', 'other', 'price'], 'string'],
            [['parent_id', 'restaurant_id'], 'integer'],
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
            'type' => 'Type',
            'other' => 'Other',
            'parent_id' => 'Parent ID',
            'restaurant_id' => 'Restaurant ID',
            'price' => 'Price',
        ];
    }
}
