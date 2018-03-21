<?php

namespace app\assets;

use yii\web\AssetBundle;

class MomentAsset extends AssetBundle
{
    public $sourcePath = '@vendor/moment/moment';

    public $js = ['min/moment.min.js'];
}

