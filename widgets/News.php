<?php

namespace app\widgets;

use yii\base\Widget;

class News extends Widget
{
    public $data;

    public function run()
    {
        echo $this->render('news', ['news' => $this->data]);
    }
}