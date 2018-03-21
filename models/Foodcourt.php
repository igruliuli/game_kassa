<?php

namespace app\models;

use yii\db\ActiveRecord;
use yiidreamteam\upload\ImageUploadBehavior;
use sortablelist\SortableListBehavior;

/**
 * @property integer $id
 * @property string $title
 * @property string $picture
 * @property integer $order
 */
class Foodcourt extends ActiveRecord
{
    public $picture_remove = 0;

    public static function tableName()
    {
        return '{{%foodcourt}}';
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
            [['title'], 'required'],
            // TODO: client validation
            //['picture', 'required'],
            ['title', 'string', 'max' => 128],
            [['title', 'picture'], 'trim'],
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
                        'normal' => ['width' => 449, 'height' => 300],
                    ],
                    'filePath' => '@webroot/uploads/foodcourt/[[id]]/picture/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/foodcourt/[[id]]/picture/[[filename]].[[extension]]',
                    'thumbPath' => '@webroot/uploads/foodcourt/[[id]]/picture/[[filename]]_[[profile]].[[extension]]',
                    'thumbUrl' => '/uploads/foodcourt/[[id]]/picture/[[filename]]_[[profile]].[[extension]]',
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
            'title' => 'Название',
            'picture' => 'Изображение',
        ];
    }
}