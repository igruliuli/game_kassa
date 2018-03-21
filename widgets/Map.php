<?php

namespace app\widgets;

use app\models\MapImage;
use yii\base\Widget;

class Map extends Widget
{
    public function run()
    {
        $map = new MapImage();

        echo $this->render('map', ['map' => $map]);
    }
}