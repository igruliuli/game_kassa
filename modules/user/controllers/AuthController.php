<?php

namespace app\modules\user\controllers;

use Yii;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use app\modules\user\forms\Login;
use app\modules\user\forms\Registration;
use app\modules\user\forms\Restore;
use app\modules\user\models\User;
use app\libraries\behaviors\JsonResponseBehavior;

/**
 * @method  createResponse(array $data = [])
 */
class AuthController extends Controller
{
	public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            'jsonResponse' => [
                'class' => JsonResponseBehavior::className(),
            ]
        ];
    }

    public function actionLogin()
	{
	    // POST: {user: "testadmin21568", password: "1111", captcha: ""}
		$request = \Yii::$app->request;

		$form = new Login;

		if ($request->isPost) {
			if ($form->load($request->post(), '') && $form->login()) {

			    $user = $form->getUser();

				return $this->createResponse([
				    'error' => false,
                    'id' => $user->id,
                    'account' => $user->id,
                    'login' => $user->login,
                    'role' => 'master',
                    'realm' => $user->realm,
                    'name' => $user->name,
                ]);
			}
		}

		// {"error":false,"id":46336,"login":"testadmin21568","name":".","realm":"system","account":21568,"md5":"e442a45354bff70209a65197d5330006","role":"master"}

		return $this->createResponse(['error' => true]);
	}

	public function actionLogout()
	{
		\Yii::$app->user->logout(false);

		return $this->createResponse([]);
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