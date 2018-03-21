<?php

namespace app\models;

use yii\db\ActiveRecord;

/**
 * @property integer $id
 * @property string $title
 * @property string $picture
 * @property string $text
 * @property string $date
 */
class News extends ActiveRecord
{
    public $picture_remove = 0;

    /** @inheritdoc */
    public function beforeSave($insert)
    {
        $parent = parent::beforeSave($insert);

        if ($this->picture_remove) {
            $this->getBehavior('picture')->cleanFiles();
            $this->picture = '';
        }

        return $parent;
    }

    public function rules()
    {
        return [
            [['title', 'text', 'picture'], 'trim'],
            ['title', 'required'],
            ['text', 'required', 'enableClientValidation' => false],
            ['title', 'string', 'max' => 50],
            ['text', 'string'],
            ['date', 'default', 'value' => (new \DateTime())->format('Y-m-d H:i:s')],
            ['picture_remove', 'boolean']
        ];
    }

    public function behaviors()
    {
        return [
            'picture' =>
                [
                    'class' => '\yiidreamteam\upload\ImageUploadBehavior',
                    'attribute' => 'picture',
                    'thumbs' => [
                        'normal' => ['width' => 256, 'height' => 172],
                    ],
                    'filePath' => '@webroot/uploads/news/[[id]]/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/news/[[id]]/[[filename]].[[extension]]',
                    'thumbPath' => '@webroot/uploads/news/[[id]]/[[filename]]_[[profile]].[[extension]]',
                    'thumbUrl' => '/uploads/news/[[id]]/[[filename]]_[[profile]].[[extension]]',
                ],
        ];
    }

    public function attributeLabels()
    {
        return [
            'title' => 'Название',
            'text' => 'Текст',
            'picture' => 'Изображение',
            'date' => 'Дата',
        ];
    }
}