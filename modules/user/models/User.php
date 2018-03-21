<?php

namespace app\modules\user\models;

use yii\db\ActiveRecord;
use yii\web\IdentityInterface;

/**
 * @property integer $id
 * @property integer $account_id
 * @property string $email
 * @property string $login
 * @property string $name
 * @property string $realm
 * @property string $phone
 * @property string $password
 * @property integer $is_admin
 * @property integer $status
 * @property string $key
 *
 * @property Account $account
 */
class User extends ActiveRecord implements IdentityInterface
{
	const EVENT_BEFORE_BIND_TO_FORM = 'beforeInsertToForm';

    const ADMIN_EMAIL = 'super@admin.com';
    const ADMIN_LOGIN = 'admin';

	const STATUS_ACTIVE = 1;
	const STATUS_INACTIVE = 0;

    const ROLE_ADMIN = 'system';
    const ROLE_KASSIR = 'betting';

	public $authKey;
	public $accessToken;
	public $new_password;
	public $new_password_repeat;

    public static function tableName()
    {
        return '{{users}}';
    }

    public function init()
	{
		parent::init();

		$this->on(self::EVENT_BEFORE_BIND_TO_FORM, function($event) {
			$user = $event->sender;
			$user->password = '';
		});

		$encryptPassword = function($event) {
			/** @var User $user */
			$user = $event->sender;
			if (!empty($user->password) && $user->isAttributeChanged('password')) {
				$user->password = \Yii::$app->getSecurity()->generatePasswordHash($user->password);
			} else {
				unset($user->password);
			}
		};

		$this->on(self::EVENT_BEFORE_INSERT, $encryptPassword);
		$this->on(self::EVENT_BEFORE_UPDATE, $encryptPassword);
	}

	public function rules()
	{
		return [
		    ['realm', 'required'],
			[['password', 'login', 'name'], 'trim'],
			['password', 'required', 'on' => 'signup'],
			['password', 'required', 'on' => 'insert'],
			['is_admin', 'safe', 'on' => 'admin-manage']
		];
	}

	public function scenarios()
	{
		return [
			'signup' => ['email', 'password'],
		] + parent::scenarios();
	}

	public function attributeLabels()
	{
		return [
			'email' => \Yii::t('user', 'Email'),
			'password' => \Yii::t('user', 'Password'),
			'new_password' => \Yii::t('user', 'New Password'),
			'new_password_repeat' => \Yii::t('user', 'Repeat Password'),
		];
	}

	public function getAccount()
    {
        return $this->hasOne(Account::className(), ['id' => 'account_id']);
    }

	/**
	 * @inheritdoc
	 */
	public static function findIdentity($id)
	{
		return User::find()->where(['id' => $id])->one();
	}

	/**
	 * @inheritdoc
	 */
	public static function findIdentityByAccessToken($token, $type = null)
	{
		return null;
	}

	public static function findByEmail($email)
	{
		return User::find()->where(['email' => $email])->one();
	}

	/**
	 * @inheritdoc
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * @inheritdoc
	 */
	public function getAuthKey()
	{
		return $this->authKey;
	}

	/**
	 * @inheritdoc
	 */
	public function validateAuthKey($authKey)
	{
		return $this->authKey === $authKey;
	}

	/**
	 * Validates password
	 *
	 * @param  string  $password password to validate
	 * @return boolean if password provided is valid for current user
	 */
	public function validatePassword($password)
	{
		return \Yii::$app->getSecurity()->validatePassword($password, $this->password);
	}

	public function comparePasswords($attribute)
	{
		if (!empty($attribute)) {
			if (empty($this->new_password) || empty($this->new_password_repeat)) {
				$this->addError('password', 'Все пароли должны быть указаны');
			}
		}
	}

	public function generateKey()
	{
		$this->key = md5(uniqid());
	}

	/**
     * @return User[]
     */
	public static function getAdminAccounts($id)
    {
        return User::find()
            ->where(['parent_id' => $id])
            ->orWhere(['id' => $id])
            ->all();
    }

	public static function createFirstAdmin()
	{
		//save user
		$user = new User();
		$user->scenario = 'admin-manage';
		$user->load([
			'password' => 'super-admin',
			'is_admin' => 1,
            'realm' => \app\modules\user\models\User::ROLE_ADMIN,
            'login' => \app\modules\user\models\User::ADMIN_LOGIN,
            'name' => \app\modules\user\models\User::ADMIN_LOGIN,
        ], '');
		$user->save();
	}
}