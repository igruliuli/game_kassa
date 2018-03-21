<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use admin\components\actions\ManageAction;
use app\modules\admin\forms\MainText;
use config\Config;
use yii\db\Query;
use yii\helpers\ArrayHelper;

class MainController extends BaseAdminController
{
    public function actionIndex()
    {
        $form = new MainText();

        $query = new Query();
        $settings = $query->select(['key', 'value'])->from(Config::tableName())->all();

        $settings = ArrayHelper::map($settings, 'key', 'value');

        $form->setAttributes($settings);

        if (\Yii::$app->request->isPost) {
            if ($form->load(\Yii::$app->request->post()) && $form->validate()) {
                $sql = \Yii::$app->db->queryBuilder->batchInsert(Config::tableName(), ['key', 'value'], $form->compose());
                \Yii::$app->db->createCommand($sql . ' ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)')->execute();
                return $this->redirect(['/admin/main']);
            }
        }

        return $this->render('index', ['model' => $form]);
    }
}