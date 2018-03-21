<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use yii\filters\AccessControl;

class IndexController extends BaseAdminController
{

	public $enableCsrfValidation = false;

	public function actionIndex()
	{
		return $this->render('index');
	}

}