<?php

namespace app\modules\user\forms;

use Yii;
use yii\base\Model;
use fx\validators\PhoneValidator;
use app\modules\user\models\User;

class Registration extends Model
{
	public $name;
	public $email;
	public $phone;
	public $password;
	public $agree;

	public function rules()
	{
		return [
			[['name', 'email', 'phone', 'password'], 'required'],
			['agree', 'required', 'message' => 'Вы должны согласиться с условиями'],
			[['name', 'email', 'phone', 'password'], 'trim'],
			[['name', 'email'], 'string', 'max' => 100],
			['email', 'unique', 'targetClass' => User::className()],
			['password', 'string', 'max' => 16],
			['email', 'email'],
			['phone', PhoneValidator::className(), 'format' => 'ua'],
			['agree', 'agreeValidate']
		];
	}

	public function attributeLabels()
	{
		return [
			'name' => Yii::t('user', 'Username'),
			'email' => Yii::t('user', 'Email'),
			'password' => Yii::t('user', 'Password'),
			'phone' => Yii::t('user', 'Phone'),
		];
	}

	public function agreeValidate($attribute, $params)
	{
		if ($this->$attribute != 1) {
			$this->addError($attribute, 'Вы должны согласиться с условиями');
		}
	}
}