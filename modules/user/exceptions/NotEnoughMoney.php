<?php

namespace app\modules\user\exceptions;

use yii\base\Exception;

class NotEnoughMoney extends Exception
{
    public function __construct($message = '', $code = 0, Exception $previous = null)
    {
        parent::__construct($message, $code, $previous);

        $this->message = 'target_account_not_enough_money';
    }
}