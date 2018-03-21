<?php

namespace sortablelist;

use yii\helpers\Url;
use yii\widgets\ListView;

class SortableListView extends ListView
{
    /** @var string|array Sort action */
    public $sortableAction = ['sort'];

    public function run()
    {
        $this->registerWidget();
        parent::run();
    }

    protected function registerWidget()
    {
        $view = $this->getView();
        $url = is_array($this->sortableAction) ? Url::toRoute($this->sortableAction) : $this->sortableAction;
        $view->registerJs("jQuery('#{$this->options['id']}').SortableListView('{$url}');");
        SortableListAsset::register($view);
    }
}