<?php

namespace app\modules\user\controllers;

use app\modules\user\models\User;
use yii\web\Controller;
use yii\filters\AccessControl;
use app\libraries\behaviors\JsonResponseBehavior;

/**
 * @method  createResponse(array $data = [])
 */
class UsersController extends Controller
{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@']
                    ],
                    ['allow' => false]
                ]
            ],
            'jsonResponse' => [
                'class' => JsonResponseBehavior::className(),
            ]
        ];
    }

    public function actionSave($id)
    {
        /** @var User $currentUser */
        $currentUser = \Yii::$app->user->getIdentity();

        $post = \Yii::$app->request->post();
        $userId = isset($post['user']) && isset($post['user']['id']) ? $post['user']['id'] : null;

        if ($userId) {
            $user = User::findOne($userId);
        } else {
            $user = new User();
            $user->account_id = $id;
        }

        $user->load($post, 'user');
        $user->save();

        // POST: {user: {login: "123", password: "321s", name: "sdfgs", realm: "system", multilogin: true}}

        return 'success';
    }

    public function actionCheckName($name)
    {
        $exists = User::find()->where(['login' => $name])->exists();
        return $this->createResponse(['exists' => $exists]);
    }
}