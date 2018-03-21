<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

class DateTimePickerAsset extends AssetBundle
{
    public $sourcePath = '@vendor/eonasdan/bootstrap-datetimepicker/build';

    public $js = [
        'js/bootstrap-datetimepicker.min.js'
    ];

    public $css = [
        'css/bootstrap-datetimepicker.min.css'
    ];

    public $depends = [
        'yii\web\JqueryAsset',
        'yii\bootstrap\BootstrapPluginAsset',
        'app\assets\MomentAsset'
    ];
}