<?php

namespace admin\components;

use yii\db\ActiveRecord;
use yii\web\Controller;
use yii\filters\AccessControl;

class BaseAdminController extends Controller
{
    public $enableCsrfValidation = false;

	public function init()
	{
		parent::init();

		$this->view->title = 'Панель управления';

		$this->layout = '@admin/views/layouts/onecolumn';
	}

	public function behaviors()
	{
		return [
			'access' => [
				'class' => AccessControl::className(),
				'rules' => [
					[
						'allow' => true,
						'roles' => ['@'],
						'matchCallback' => function($rule, $action) {
							return (\Yii::$app->user->getIdentity()->is_admin == 1);
						}
					],
					['allow' => false],
				],
			],
		];
	}

    /**
     * @param ActiveRecord $model
     * @return boolean
     */
    protected function saveFromPost($model)
    {
        $request = \Yii::$app->request;

        if ($request->isPost) {
            if ($model->load($request->post()) && $model->validate()) {
                return $model->save();
            }
        }

        return false;
    }

    /**
     * Deletes an existing ActiveRecord model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();
        return $this->redirect(['index']);
    }
}