<?php

namespace app\widgets;

use app\modules\admin\forms\DocForm;
use yii\base\Widget;
use yii\helpers\Html;

class Participants extends Widget
{
    public function run()
    {
        $list = \app\models\Participant::find()->orderBy('order')->all();
        $docs = new DocForm();

        echo $this->render('participants', ['list' => $list, 'doc' => $docs]);
    }
}