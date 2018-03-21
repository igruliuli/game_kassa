<?php

namespace config;

use yii\db\ActiveRecord;

class Config extends ActiveRecord
{
    public static function tableName()
    {
        return '{{%config}}';
    }

    public static $records = [];

    public function rules()
    {
        return [
            [['key'], 'required'],
            [['value'], 'required', 'skipOnEmpty' => true],
            [['value', 'key'], 'trim']
        ];
    }

    /**  */
    public static function getValue($key, $default = null)
    {
        if (!array_key_exists($key, self::$records)) {
            /** @var Config $record */
            $record = self::findOne($key);

            if (!$record) {
                self::$records[$key] = null;
            } else {
                self::$records[$key] = $record->value;
            }
        }

        if (self::$records[$key] === null) {
            return $default;
        }

        return self::$records[$key];
    }

    public static function saveValue($key, $value)
    {
        /** @var Config $record */
        $record = self::findOne($key);

        if (!$record) {
            $record = new self();
            $record->key = $key;
        }

        $record->value = $value;

        return $record->save();
    }
}