<?php

namespace app\modules\admin\forms;

use yii\base\Model;

class MainText extends Model
{
    public $right_top_block;
    public $text_on_button;
    public $day;
    public $date;
    public $lektory_text;
    public $city;
    public $contacts;

    public function rules()
    {
        return [
            [['right_top_block', 'text_on_button', 'day', 'date', 'lektory_text', 'city', 'contacts'], 'trim'],
            [['day', 'date'], 'default', 'value' => 0]
        ];
    }

    public function attributeLabels()
    {
        return [
            'right_top_block' => 'Надпись в блоке',
            'text_on_button' => 'Текст на кнопке',
            'day' => 'День',
            'date' => 'Дата',
            'lektory_text' => 'Раздел "Лекторий"',
            'city' => 'Город и место проведения',
            'contacts' => 'Контактные данные'
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