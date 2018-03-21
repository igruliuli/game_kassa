<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use config\Config;

class IndexController extends BaseAdminController
{
	public $enableCsrfValidation = false;

	public function actionIndex()
	{
	    $time = Config::getValue('timer');

        $interval = null;

        if (!is_null($time)) {

            $date = new \DateTime($time);

            $interval = $date->diff(new \DateTime());
        }

		return $this->render('index', ['time' => $time, 'interval' => $interval]);
	}

	public function actionSaveTimer()
    {
        $time = \Yii::$app->request->post('time');

        Config::saveValue('timer', $time);

        return $this->redirect(['index']);
    }

    public function actionSaveBlocks()
    {
        $program_status = \Yii::$app->request->post('program');
        $lektory_status = \Yii::$app->request->post('lektory');

        Config::saveValue('program_status', $program_status);
        Config::saveValue('lektory_status', $lektory_status);

        return $this->redirect(['index']);
    }
}