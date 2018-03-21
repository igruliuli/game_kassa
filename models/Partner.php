<?php

namespace app\models;

use yii\db\ActiveRecord;
use yiidreamteam\upload\ImageUploadBehavior;
use sortablelist\SortableListBehavior;

/**
 * @property integer $id
 * @property string $name
 * @property string $picture
 * @property string $url
 * @property integer $order
 */
class Partner extends ActiveRecord
{
    public $picture_remove = 0;

    public static function tableName()
    {
        return '{{%partners}}';
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
            [['name'], 'required'],
            // TODO: client validation
            //['picture', 'required'],
            ['name', 'string', 'max' => 128],
            [['name', 'picture', 'url'], 'trim'],
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
                    'filePath' => '@webroot/uploads/partner/[[id]]/picture/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/partner/[[id]]/picture/[[filename]].[[extension]]',
                    'thumbPath' => '@webroot/uploads/partner/[[id]]/picture/[[filename]]_[[profile]].[[extension]]',
                    'thumbUrl' => '/uploads/partner/[[id]]/picture/[[filename]]_[[profile]].[[extension]]',
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
            'name' => 'Название',
            'picture' => 'Изображение',
            'url' => 'Сайт',
        ];
    }
}