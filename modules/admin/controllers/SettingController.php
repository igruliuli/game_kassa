<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use app\modules\admin\forms\SettingForm;
use app\modules\user\models\User;
use yii\db\Query;
use yii\helpers\ArrayHelper;

class SettingController extends BaseAdminController
{
	public function actionIndex()
	{
        /** @var User $user */
		$user = \Yii::$app->user->getIdentity();
        $request = \Yii::$app->request;

        if ($request->isPost) {
            $user->load($request->post());

            if (!empty($user->new_password)) {
                $user->password = '';
            }

            if ($user->validate()) {
                if (!empty($user->new_password)) {
                    $user->password = $user->new_password;
                }
                $user->save();
            }
        }

		return $this->render('index', ['user' => $user]);
	}

	public function actionUpdateUser()
	{
		return $this->render('update');
	}
}