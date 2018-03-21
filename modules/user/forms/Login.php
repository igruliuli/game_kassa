<?php

namespace app\modules\user\forms;

use Yii;
use yii\base\Model;
use app\modules\user\models\User;

class Login extends Model
{
	public $user;
	public $password;

	private $_user = false;

	public function rules()
	{
		return [
			[['user', 'password'], 'required'],
			['password', 'validatePassword'],
		];
	}

	public function validatePassword($attribute, $params)
	{
		if (!$this->hasErrors()) {
			$user = $this->getUser();

			if (!$user || !$user->validatePassword($this->password)) {
				$this->addError($attribute, \Yii::t('user', 'Incorrect username or password.'));
			}
		}
	}

	/**
	 * Finds user by [[email]]
	 *
	 * @return User|null
	 */
	public function getUser()
	{
		if ($this->_user === false) {
			$this->_user = User::findOne(['login' => $this->user]);
		}

		return $this->_user;
	}

	public function login()
	{
		if ($this->validate()) {
			return Yii::$app->user->login($this->getUser());
		} else {
			return false;
		}
	}

	public function attributeLabels()
	{
		return [
			'password' => \Yii::t('user', 'Password'),
			'email' => \Yii::t('user', 'Email'),
		];
	}
}