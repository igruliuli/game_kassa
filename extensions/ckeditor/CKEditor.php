<?php

namespace ckeditor;

use yii\web\View;
use yii\widgets\InputWidget;
use yii\helpers\Html;

class CKEditor extends InputWidget
{
    public $editorOptions = [];

    public function publishAssets() {
		CKEditorAsset::register($this->view);
    }

    public function run()
    {
		$this->publishAssets();

        $config = json_encode($this->editorOptions);

		$this->view->registerJs("CKEDITOR.replace('{$this->options['id']}', {$config});", View::POS_READY);

        if ($this->hasModel())
        {
            $html = Html::activeTextArea($this->model, $this->attribute, $this->options);
        } else
        {
            $html = Html::textArea($this->name, $this->value, $this->options);
        }
        echo $html;
    }
}


