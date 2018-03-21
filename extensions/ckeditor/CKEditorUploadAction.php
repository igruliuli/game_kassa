<?php

namespace ckeditor;

use Yii;
use yii\base\Action;
use yii\web\UploadedFile;

class CKEditorUploadAction extends Action
{
    public $path;

    public function run()
    {
        $basePath = Yii::getAlias('@webroot');
        $callback = $_GET['CKEditorFuncNum'];
		$file = UploadedFile::getInstanceByName('upload');
		$fileName = $file->name;
		if(($pos=strrpos($fileName,'.'))!==false) {
			$fileName = (string)substr($fileName,0,$pos);
		}

		$newName = uniqid($fileName). '.' . $file->extension;
        $full_path = $basePath . DIRECTORY_SEPARATOR . $this->path . DIRECTORY_SEPARATOR . $newName;
        $http_path = Yii::getAlias('@web') . '/' . $this->path . '/' . $newName;

        $error = '';
        if (!$file->saveAs($full_path)) {
            $error = 'Some error occured please try again later';
            $http_path = '';
        }
        echo "<script type=\"text/javascript\">
                 window.parent.CKEDITOR.tools.callFunction(".$callback.",  \"".$http_path."\", \"".$error."\" );
             </script>";
    }
}