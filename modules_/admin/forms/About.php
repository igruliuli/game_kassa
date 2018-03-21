<?php

namespace app\modules\admin\forms;

use yii\base\Model;

class About extends Model
{
    public $about_text;
    public $tickets_sold;
    public $buy_ticket;
    public $event_us;
    public $smi;
    public $meta_description;
    public $meta_title;

    public function rules()
    {
        return [
            [['tickets_sold', 'about_text', 'buy_ticket', 'event_us', 'smi', 'meta_title', 'meta_description'], 'trim'],
            ['tickets_sold', 'default', 'value' => 0]
        ];
    }

    public function attributeLabels()
    {
        return [
            'tickets_sold' => 'Продано билетов',
            'about_text' => 'О фестивале',
            'buy_ticket' => 'Раздел "Купить билет"',
            'event_us' => 'Раздел "Стать участником"',
            'smi' => 'Раздел "Аккредитация СМИ"'
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