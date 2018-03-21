<?php

namespace app\modules\user\assets;

use yii\web\AssetBundle;

class AccountAsset extends AssetBundle
{
	public $sourcePath = '@app/modules/user/web';

	public $css = [
		'css/profile.css'
	];

	public $depends = [
		'app\assets\AppAsset'
	];
}
