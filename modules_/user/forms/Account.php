<?php

namespace app\modules\user\forms;

use Yii;
use yii\base\Model;
use fx\validators\PhoneValidator;
use app\modules\user\models\User;

class Account extends Model
{
	public $name;
	public $email;
	public $phone;

	public $password;
	public $new_password;
	public $new_password_repeat;

	public function rules()
	{
		$user = Yii::$app->user->getIdentity();
		return [
			[['name', 'email', 'phone'], 'required'],
			[['name', 'email', 'phone', 'password', 'new_password', 'new_password_repeat'], 'trim'],
			[['name', 'email'], 'string', 'max' => 100],
			[['password', 'new_password', 'new_password_repeat'], 'string', 'max' => 16],
			[['password', 'new_password', 'new_password_repeat'], 'comparePasswords'],
			['password', 'validatePassword'],
			['new_password', 'compare'],
			['email', 'email'],
			['email', 'unique', 'targetClass' => User::className(), 'filter' => ['not', ['id' => $user->id]]],
			['phone', PhoneValidator::className(), 'format' => 'ua'],
		];
	}

	public function attributeLabels()
	{
		return [
			'name' => Yii::t('user', 'Username'),
			'email' => Yii::t('user', 'Email'),
			'password' => Yii::t('user', 'Password'),
			'phone' => Yii::t('user', 'Phone'),
			'new_password' => 'Новый пароль'
		];
	}

	public function validatePassword($attribute, $params)
	{
		/** @var User $user */
		$user = Yii::$app->user->getIdentity();

		if (!$user->validatePassword($this->password)) {
			$this->addError($attribute, 'Текущий пароль неверный');
		}
	}

	public function comparePasswords($attribute)
	{
		if (!empty($attribute)) {
			if (empty($this->password) || empty($this->new_password) || empty($this->new_password_repeat)) {
				$this->addError('password', 'Все пароли должны быть указаны');
			}
		}
	}
}