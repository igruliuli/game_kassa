<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use app\models\MapImage;
use app\modules\admin\forms\DocForm;
use config\Config;

class LinksController extends BaseAdminController
{
    public function actionIndex()
    {
        $request = \Yii::$app->request;

        $form = new DocForm();

        if ($request->isPost) {
            $form->load($request->post());
            if (!$form->save()) {

            }
        }

        return $this->render('index', [
            'docForm' => $form
        ]);
    }
}