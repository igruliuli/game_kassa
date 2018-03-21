<?php

namespace app\modules\admin;

use Yii;

class Module extends \yii\base\Module
{
	public function init()
	{
		parent::init();

		$this->defaultRoute = 'index';

		Yii::setAlias('@admin', $this->getBasePath());

        $config = [
            'class' => 'yii\i18n\PhpMessageSource',
            'basePath' => "@admin/messages",
            'forceTranslation' => true
        ];

        Yii::$app->i18n->translations["admin*"] = $config;
	}
}