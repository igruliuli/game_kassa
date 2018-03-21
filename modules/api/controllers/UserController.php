<?php

namespace app\modules\api\controllers;

use app\modules\user\models\User;

class UserController extends ApiController
{
    public function actionLogin()
    {
        $request = \Yii::$app->request;

        $login = $request->post('login');
        $password = $request->post('password');

        /** @var User $user */
        $user = User::findOne(['login' => $login]);

        if (is_null($user) || !$user->validatePassword($password)) {
            return ['code' => 0, 'error' => 'Неверный логин или пароль'];
        } else {

            \Yii::$app->user->login($user, 30 * 86400);

            return ['code' => 1, 'user' => [
                'id' => $user->id,
                'login' => $user->login
            ]];
        }
    }
}