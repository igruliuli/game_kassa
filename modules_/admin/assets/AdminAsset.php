<?php

namespace admin\assets;

use yii\web\AssetBundle;

class AdminAsset extends AssetBundle
{
	public $sourcePath = '@admin/web';

	public $css = [
		'css/admin.css'
	];

	public $js = [
		'js/admin.js'
	];

	public $depends = [
		'yii\web\YiiAsset',
		'yii\bootstrap\BootstrapAsset',
	];
}