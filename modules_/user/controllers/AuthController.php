<?php

namespace app\modules\user\controllers;

use Yii;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use app\modules\user\forms\Login;
use app\modules\user\forms\Registration;
use app\modules\user\forms\Restore;
use app\modules\user\models\User;

class AuthController extends Controller
{
	public $enableCsrfValidation = false;
	public function actionLogin()
	{
		$request = \Yii::$app->request;

		if (!\Yii::$app->user->isGuest) {
			return $this->goHome();
		}

		$form = new Login;

		if ($request->isPost) {
			if ($form->load($request->post()) && $form->login()) {
				$this->goBack('/');
			}

		}

		return $this->render('login', ['form' => $form]);
	}

	public function actionLogout()
	{
		\Yii::$app->user->logout(false);

		return $this->goBack('/login');
	}

	public function actionRegister()
	{
		$request = \Yii::$app->request;

		if (!\Yii::$app->user->isGuest) {
			$this->goHome();
			\Yii::$app->getResponse()->setStatusCode(200);
			return \Yii::$app->getResponse();
		}

		$form = new Registration();

		if ($request->isPost) {
			header('Content-Type: application/json');

			$response = array();

			if ($form->load($request->post()) && $form->validate()) {

				//save user
				$user = new User();
				$user->load($form->getAttributes(), '');
				$user->generateKey();
				$user->save();

				// send registration email
				Yii::$app->mailer
					->compose('@app/modules/user/views/mail/registration', ['user' => $user])
					->setFrom(Yii::$app->params['adminEmail'])
					->setTo($user->email)
					->setSubject(Yii::t('user', 'Thank you for registration'))
					->send();

				$this->redirect('/user/auth/confirmation');
				\Yii::$app->getResponse()->setStatusCode(200);
			} else {
				if ($request->isAjax) {
					\Yii::$app->getResponse()->setStatusCode(422);

					$response['errors'] = array();

					foreach ($form->getErrors() as $attr => $errors) {
						$response['errors'][$attr] = array_shift($errors);
					}

					echo json_encode($response);
				}
			}
		} else {

		}
	}

	public function actionConfirmation()
	{
		return $this->render('confirmation');
	}

	public function actionActivation()
	{
		$request = Yii::$app->getRequest();
		$message = '';

		try {
			if ($request->get('key', null) == null || $request->get('email') == null) {
				throw new BadRequestHttpException('Неверная ссылка активации');
			}

			$user = User::findOne(['email' => $request->get('email')]);

			if ($user == null) {
				throw new BadRequestHttpException('Неверная ссылка активации');
			}

			if ($user->status == User::STATUS_ACTIVE) {
				throw new BadRequestHttpException('Аккаунт уже активирован. Вы можете войти с помощью своей электронной почты и пароля.');
			}

			if ($user->key != $request->get('key')) {
				throw new BadRequestHttpException('Неверная ссылка активации');
			}

			$user->status = User::STATUS_ACTIVE;
			$user->save();

			$message = 'Поздравляем! Аккаунт активирован. Вы можете войти с помощью своей электронной почты и пароля.';

		} catch (\Exception $ex) {
			$message = $ex->getMessage();
		}


		return $this->render('activation', ['message' => $message]);
	}
}