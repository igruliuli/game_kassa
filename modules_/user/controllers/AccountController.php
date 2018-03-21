<?php

namespace app\modules\user\controllers;

use app\modules\user\models\User;
use Yii;
use yii\web\Controller;
use app\modules\user\forms\Account;
use yii\filters\AccessControl;

class AccountController extends Controller
{
	public function behaviors()
	{
		return [
			'access' => [
				'class' => AccessControl::className(),
				'rules' => [
					[
						'allow' => true,
						'roles' => ['@']
					],
					['allow' => false]
				]
			]
		];
	}

	public function actionIndex()
	{
		/** @var User $user */
		$user = Yii::$app->user->getIdentity();

		$request = Yii::$app->request;

		$form = new Account();

		if ($request->isPost) {
			if ($form->load($request->post()) && $form->validate()) {
				$attributes = $form->getAttributes(['name', 'phone', 'email']);
				if (!empty($form->new_password)) {
					$attributes['password'] = $form->new_password;
				}
				$user->load($attributes, '');
				$user->save(false, array_keys($attributes));
			}
		} else {
			$form->load($user->getAttributes(['name', 'phone', 'email']), '');
		}

		return $this->render('index', ['form' => $form]);
	}
}