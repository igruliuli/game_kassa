<?php

namespace admin\assets;

use yii\web\AssetBundle;

class AdminAsset extends AssetBundle
{
	public $sourcePath = '@admin/web';

	public $css = [
		'css/admin.css',
        'css/jquery.fancybox.css',
        'css/style.css'
	];

	public $js = [
		//'js/admin.js',
        'js/jquery-2.0.3.min.js',
        'js/vendors.js',
        'js/app.js',
	];

	//public $depends = [
		//'yii\web\YiiAsset',
		//'yii\bootstrap\BootstrapAsset',
	//];
}