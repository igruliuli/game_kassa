<?php

namespace admin\components\actions;

use yii\base\Action;

class DeleteAction extends Action
{
	public $modelClass;
	public $redirect = 'index';

	public function run()
	{
		$request = \Yii::$app->getRequest();
		$pk = $request->get('id');

		$modelClass = $this->modelClass;
		$model = $modelClass::findOne($pk);

        if (is_callable($this->redirect)) {
            $this->redirect = call_user_func($this->redirect, $model);
        }

		if ($model) {
			$model->delete();
		}

		if ($this->redirect !== false) {
            $this->controller->redirect($this->redirect);
		}
	}
}