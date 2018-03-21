<?php

namespace app\modules\admin\forms;

use yii\base\Model;

class SettingForm extends Model
{
    public $company_name;
    public $email_notify;
    public $email;
    public $phone;
    public $waiting_days = 0;

	public function rules()
	{
		return [
			[['email_notify', 'email', 'phone', 'waiting_days', 'company_name'], 'trim'],
			[['email_notify', 'email'], 'email'],
			['waiting_days', 'number', 'integerOnly' => true],
			['waiting_days', 'default', 'value' => 0]
		];
	}

	public function attributeLabels()
	{
		return [
            'company_name' => 'Название компании',
            'email_notify' => 'Email для уведомлений',
            'email' => 'Email компании',
            'phone' => 'Номер телефона компании',
            'waiting_days' => 'Количество дней ожидания инженера'
		];
	}

	public function compose()
	{
		$result = [];

		foreach ($this->attributes as $key => $value) {
			$result[] = [$key, $value];
		}

		return $result;
	}
}