<?php

namespace app\models;

use yii\db\ActiveRecord;

/**
 * @property integer $id
 * @property integer $day
 * @property integer $zone_id
 * @property string $name
 * @property string $time
 */
class ProgramItem extends ActiveRecord
{
    /** @inheritdoc */
    public static function tableName()
    {
        return '{{%program_items}}';
    }

    /** @inheritdoc */
    public function rules()
    {
        return [
            [['name', 'day', 'time', 'zone_id'], 'required'],
            ['name', 'string', 'max' => 128],
            [['name', 'time'], 'trim'],
        ];
    }

    /** @inheritdoc */
    public function attributeLabels()
    {
        return [
            'day' => 'День',
            'time' => 'Время',
            'zone_id' => 'Зона',
            'name' => 'Название',
        ];
    }

    public function getZone()
    {
        return $this->hasOne(Zone::className(), ['id' => 'zone_id']);
    }
}