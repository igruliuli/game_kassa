<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use yii\data\ActiveDataProvider;
use yii\web\NotFoundHttpException;
use app\models\PageUrl;

class PageController extends BaseAdminController
{
    public function actionIndex()
    {
        $this->layout = 'leftmenu';

        $dataProvider = new ActiveDataProvider([
            'query' => PageUrl::find()
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider
        ]);
    }

    public function actionCreate()
    {
        $this->layout = 'leftmenu';

        $template = new PageUrl();

        if ($this->saveFromPost($template)) {
            return $this->redirect(['/admin/page/index']);
        }

        return $this->render('update', ['model' => $template]);
    }

    public function actionUpdate($id)
    {
        $this->layout = 'leftmenu';

        $model = $this->findModel($id);

        if ($this->saveFromPost($model)) {
            return $this->redirect(['/admin/page/index']);
        }

        return $this->render('update', ['model' => $model]);
    }

    /**
     * Finds the PageUrl model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return PageUrl the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = PageUrl::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}