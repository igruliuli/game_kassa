<?php

namespace app\modules\user\forms;

use yii\base\Model;
use app\modules\user\models\User;

class Restore extends Model
{
	public $email;

	public function rules()
	{
		return [
			['email', 'required'],
			['email', 'email'],
			['email', 'exist', 'targetClass' => User::className(), 'message' => 'Такого адреса нет в базе']
		];
	}
}