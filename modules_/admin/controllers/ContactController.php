<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use app\modules\admin\forms\ContactForm;
use config\Config;

class ContactController extends BaseAdminController
{
    public function actionIndex()
    {
        $request = \Yii::$app->request;
        $model = new ContactForm();
        $model->text = Config::getValue('contacts_text');

        if ($request->isPost) {
            $model->load($request->post());

            if ($model->validate()) {
                Config::saveValue('contacts_text', $model->text);
            }
        }

        return $this->render('index', ['model' => $model]);
    }
}