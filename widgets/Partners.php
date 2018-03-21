<?php

namespace app\widgets;

use app\modules\admin\forms\DocForm;
use yii\base\Widget;
use yii\helpers\Html;

class Partners extends Widget
{
    public function run()
    {
        $list = \app\models\Partner::find()->orderBy('order')->all();

        $docs = new DocForm();

        echo $this->render('partners', ['list' => $list, 'doc' => $docs]);
    }
}