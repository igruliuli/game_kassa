<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use app\models\ContentText;
use app\models\Content;

class ContentTextController extends BaseAdminController
{
    public function actionIndex()
    {
        $request = \Yii::$app->request;
        $this->layout = 'leftmenu';

        $form = Content::getContentKey('text', new ContentText());

        if ($request->isPost) {
            if ($form->load($request->post()) && $form->validate()) {
                Content::saveKeyContent('text', $form);
            }
        }

        return $this->render('index', ['form' => $form]);
    }
}