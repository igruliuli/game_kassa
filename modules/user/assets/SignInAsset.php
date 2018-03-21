<?php

namespace app\modules\user\assets;

use yii\web\AssetBundle;

class SignInAsset extends AssetBundle
{
	public $sourcePath = '@app/modules/user/web';

	public $css = [
		'css/login.css'
	];

	public $depends = [
		'yii\web\YiiAsset',
		'yii\bootstrap\BootstrapAsset',
	];
}