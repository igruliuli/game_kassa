<?php

namespace app\models;

use yii\db\ActiveRecord;
use yiidreamteam\upload\ImageUploadBehavior;
use sortablelist\SortableListBehavior;

/**
 * @property integer $id
 * @property string $picture
 * @property string $url
 * @property integer $order
 */
class Participant extends ActiveRecord
{
    public $picture_remove = 0;

    public static function tableName()
    {
        return '{{%participants}}';
    }

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

    /** @inheritdoc */
    public function rules()
    {
        return [
            // TODO: client validation
            //['picture', 'required'],
            [['picture', 'url'], 'trim'],
            ['url', 'url'],
            ['picture_remove', 'boolean'],
            ['picture', 'file', 'maxSize' => 2097152],
        ];
    }

    public function behaviors()
    {
        return [
            'picture' =>
                [
                    'class' => ImageUploadBehavior::className(),
                    'attribute' => 'picture',
                    'thumbs' => [
                        'normal' => ['width' => 133, 'height' => 133],
                    ],
                    'filePath' => '@webroot/uploads/participants/[[id]]/picture/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/participants/[[id]]/picture/[[filename]].[[extension]]',
                    'thumbPath' => '@webroot/uploads/participants/[[id]]/picture/[[filename]]_[[profile]].[[extension]]',
                    'thumbUrl' => '/uploads/participants/[[id]]/picture/[[filename]]_[[profile]].[[extension]]',
                ],

            'sort' => [
                'class' => SortableListBehavior::className(),
                'sortableAttribute' => 'order'
            ],
        ];
    }

    public function attributeLabels()
    {
        return [
            'picture' => 'Изображение',
            'url' => 'Сайт',
        ];
    }
}