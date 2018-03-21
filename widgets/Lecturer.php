<?php

namespace app\widgets;

use yii\base\Widget;
use yii\helpers\Html;

class Lecturer extends Widget
{
    public function run()
    {
        if(!\config\Config::getValue('lektory_status')) {
            return;
        }

        $list = \app\models\LecturerSection::find()
            ->where(['not', ['day' => null]])
            ->orderBy(['day' => SORT_ASC, 'order' => SORT_ASC])
            ->all();

        $listByDay = [];

        foreach ($list as $item) {
            if (!array_key_exists($item->day, $listByDay)) {
                $listByDay[$item->day] = [];
            }

            $listByDay[$item->day][] = $item;
        }

        echo $this->render('lecturer', ['list' => $listByDay]);
    }
}