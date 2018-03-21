<?php

namespace admin\components\actions;

use yii\base\Action;
use yii\db\ActiveRecord;

class ManageAction extends Action
{
	public $view = '@admin/views/actions/manage';
	public $modelClass;
	public $elements = [];
	public $viewParams = [
		'title' => ''
	];
	public $redirect = 'index';

	public function run()
	{
		$request = \Yii::$app->getRequest();
		$pk = $request->get('id', 0);

		$modelClass = $this->modelClass;

		/** @var ActiveRecord $model */
		if ($pk > 0) {
			$model = $modelClass::find()->where(['id' => $pk])->one();
		} else {
			$model = new $modelClass();
			$scenarios = $model->scenarios();
			if (array_key_exists('insert', $scenarios)) {
				$model->scenario = 'insert';
			}
		}

		if (defined($modelClass . "::EVENT_BEFORE_BIND_TO_FORM")) {
			$model->trigger($modelClass::EVENT_BEFORE_BIND_TO_FORM);
		}

		if ($request->isPost) {
			if ($model->load($request->post()) && $model->save()) {
				if ($this->redirect !== false) {
					$redirect = $this->redirect;
					if (is_callable($this->redirect)) {
						$redirect = call_user_func($this->redirect, $model);
					}

					$this->controller->redirect($redirect);
				}
			}
		}

		return $this->controller->render($this->view, array_merge([
			'model' => $model,
			'elements' => $this->elements
		], $this->viewParams));
	}
}