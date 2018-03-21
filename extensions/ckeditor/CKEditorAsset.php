<?php

namespace ckeditor;

use yii\web\AssetBundle;

class CKEditorAsset extends AssetBundle
{
	public $sourcePath = '@ckeditor/assets';

	public $js = [
		'ckeditor/ckeditor.js'
	];
}