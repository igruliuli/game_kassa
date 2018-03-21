<?php

namespace app\modules\admin\forms;

use yii\base\Model;

class ContactForm extends Model
{
    public $text;

    public function rules()
    {
        return [
            [['text'], 'trim'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'text' => 'Контактная информация',
        ];
    }

    public function compose()
    {
        $result = [];

        foreach ($this->attributes as $key => $value) {
            $result[] = [$key, $value];
        }

        return $result;
    }
}