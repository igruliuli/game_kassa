<?php

namespace admin\components\actions;

use Yii;
use yii\base\Action;
use yii\data\ActiveDataProvider;
use yii\helpers\Url;

class ListAction extends Action
{
	public $view = '@admin/views/actions/list';
	public $query;
	public $columns = [];
	public $title;
	public $buttons;
	public $sort = [];
	public $searchModel;

	public function init()
	{
		parent::init();

		if (!isset($this->buttons)) {
			$this->buttons[] = [
				'text' => 'Add new',
				'url' => Url::toRoute([\Yii::$app->controller->id . '/manage']),
				'options' => ['class' => 'btn btn-primary']
			];
		}
	}

	public function run()
	{
		if (!$this->searchModel) {
			$dataProvider = new ActiveDataProvider([
				'query' => $this->query,
				'sort' => $this->sort
			]);
		} else {
			$dataProvider = $this->searchModel->search($this->query, $_GET, ['sort' => $this->sort]);
		}

		return $this->controller->render($this->view, [
			'dataProvider' => $dataProvider,
			'columns' => $this->columns,
			'title' => $this->title,
			'buttons' => $this->buttons,
			'searchModel' => $this->searchModel
		]);
	}
}