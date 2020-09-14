<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "menu_category".
 *
 * @property int $id
 * @property string $name
 * @property int|null $restaurant_id
 */
class MenuCategory extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'menu_category';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['name'], 'string'],
            [['restaurant_id'], 'integer'],
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
            'restaurant_id' => 'Restaurant ID',
        ];
    }
}
