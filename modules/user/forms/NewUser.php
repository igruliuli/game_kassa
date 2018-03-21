<?php

namespace app\modules\user\forms;

use yii\base\Model;

class NewUser extends Model
{
    public $login;
    public $password;
    public $name;
    public $realm;
    public $multilogin;


}