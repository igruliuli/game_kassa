<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use app\models\Content;
use yii\validators\ImageValidator;
use yii\web\HttpException;

class EditableController extends BaseAdminController
{
    public function actionSave()
    {
        $post = \Yii::$app->request->post();

        if (!isset($post['pk'])) {
            throw new HttpException(400, 'Невозможно сохранить');
        }

        $record = Content::findOne($post['pk']);

        if (!$record) {
            $record = new Content();
        }

        if (isset($post['processor'])) {
            if (is_callable([$this, $post['processor'] . 'Processor'])) {
                $post['value'] = call_user_func([$this, $post['processor'] . 'Processor'], $post['value'], $post['pk']);
            }
        }

        $data['id'] = $post['pk'];
        $data['value'] = $post['value'];

        $record->load($data, '');

        if ($record->validate()) {
            $record->save();
            header('Content-Type: application/json');
            echo json_encode([
                'success' => true,
                //'newValue' => $record->value
            ]);
            die;
        } else {
            throw new HttpException(400, 'Не удалось сохранить');
        }
    }

    public function actionUpload()
    {
        $webroot = \Yii::getAlias('@webroot');

        $config = new \Flow\Config();
        $config->setTempDir($webroot . '/tmp/');
        $file = new \Flow\File($config);
        $request = new \Flow\Request();

        if (!preg_match('#\.(jpg|jpeg|bmp|gif|png)$#i', $request->getFileName())) {
            header("HTTP/1.1 500 Bad Request");
            echo json_encode([
                'file' => [],
                'error' => ['message' => 'Ошибка: Неверный тип файла']
            ]);
            die;
        } else {
            preg_match('#^(.+)\.(jpg|jpeg|doc|docx|bmp|pdf|png)$#i', $request->getFileName(), $matches);
            $newFile = md5(time()) . strtolower(trim(preg_replace('~[^0-9a-z]+~i', '_', $matches[1]))) . '.' . $matches[2];
        }

        if ($request->getTotalSize() > (2 * 1024 * 1024)) {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode([
                'file' => [],
                'error' => ['message' => 'Ошибка: Файл слишком большой']
            ]);
            die;
        }

        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            if ($file->checkChunk()) {
                header("HTTP/1.1 200 Ok");
            } else {
                header("HTTP/1.1 204 No Content");
                die;
                return;
            }
        } else {
            if ($file->validateChunk()) {
                $file->saveChunk();
            } else {
                // error, invalid chunk upload request, retry
                header("HTTP/1.1 400 Bad Request");
                return ;
            }
        }
        if ($file->validateFile() && $file->save($webroot . '/tmp/' . $newFile)) {
            //header('Content-Type: application/json');

            $id = \Yii::$app->request->post('id');
            $imageSizes = [
                'client_1' => [
                    'width' => [120, 120],
                    'height' => [120, 120]
                ],
                'client_2' => [
                    'width' => [120, 120],
                    'height' => [120, 120]
                ],
                'client_3' => [
                    'width' => [120, 120],
                    'height' => [120, 120]
                ],
                'client_4' => [
                    'width' => [120, 120],
                    'height' => [120, 120]
                ],
                'top_banner' => [
                    'width' => [1140, 1250],
                    'height' => [700, 800]
                ],
                'action_banner' => [
                    'width' => [1900, 1900],
                    'height' => [690, 690]
                ],
                'bottom_banner' => [
                    'width' => [1900, 1900],
                    'height' => [590, 590]
                ],
                'repair_1' => [
                    'width' => [109, 110],
                    'height' => [109, 110],
                ],
                'repair_2' => [
                    'width' => [109, 110],
                    'height' => [109, 110],
                ],
                'repair_3' => [
                    'width' => [109, 110],
                    'height' => [109, 110],
                ],
                'repair_4' => [
                    'width' => [109, 110],
                    'height' => [109, 110],
                ],
                'repair_5' => [
                    'width' => [109, 110],
                    'height' => [109, 110],
                ],
                'repair_6' => [
                    'width' => [109, 110],
                    'height' => [109, 110],
                ],
                'repair_7' => [
                    'width' => [109, 110],
                    'height' => [109, 110],
                ],
            ];

            $imageSize = $imageSizes[$id];

            $imageInfo = getimagesize($webroot . '/tmp/' . $newFile);

            list($width, $height) = $imageInfo;

            if (($width > $imageSize['width'][1] || $width < $imageSize['width'][0])) {
                header("HTTP/1.1 400 Bad Request");
                echo json_encode([
                    'file' => [],
                    'error' => ['message' => "Ошибка: Минимальная ширина изображения должна составлять {$imageSize['width'][0]}px, максимальная - {$imageSize['width'][1]}px"]
                ]);
                die;
            }

            if ($height < $imageSize['height'][0] || $height > $imageSize['height'][1]) {
                header("HTTP/1.1 400 Bad Request");
                echo json_encode([
                    'file' => [],
                    'error' => ['message' => "Ошибка: Минимальная высота изображения должна составлять {$imageSize['height'][0]}px, максимальная - {$imageSize['height'][1]}px"]
                ]);
                die;
            }

            echo json_encode([
                'file' => ['name' => '/tmp/' . $newFile],
                'error' => ''
            ]);
            die;
        } else {
            // This is not a final chunk, continue to upload
        }
    }

    //processors
    public function nl2brProcessor($value)
    {
        return nl2br($value);
    }

    public function imageProcessor($value, $pk)
    {
        $webroot = \Yii::getAlias('@webroot');

        if (file_exists($webroot . $value)) {
            $content = Content::findOne($pk);
            if ($content && file_exists($webroot . $content->value)) {
                unlink($webroot . $content->value);
            }

            $newName = '/uploads/editable/' . basename($value);

            if (copy($webroot . $value, $webroot . $newName)) {
                return $newName;
            }
        }

        throw new HttpException(400, 'Не удалось сохранить файл');
    }
}