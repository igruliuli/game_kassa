<?php

namespace app\modules\user;

use Yii;
use yii\base\BootstrapInterface;

class Module extends \yii\base\Module
{
	public $layout = 'user';

	public function bootstrap($app)
	{
		Yii::setAlias('@user', $this->getBasePath());
	}
}