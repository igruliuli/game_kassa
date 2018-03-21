<?php

namespace app\models;

use yii\db\ActiveRecord;
use sortablelist\SortableListBehavior;
use yiidreamteam\upload\ImageUploadBehavior;

/**
 * @property integer $id
 * @property integer $order
 * @property string $image
 */
class CarouselSlide extends ActiveRecord
{
    public $image_remove = 0;

    /** @inheritdoc */
    public static function tableName()
    {
        return '{{%carousel_slides}}';
    }

    /** @inheritdoc */
    public function beforeSave($insert)
    {
        $parent = parent::beforeSave($insert);

        if ($this->image_remove) {
            $this->getBehavior('image')->cleanFiles();
            $this->image = '';
        }

        return $parent;
    }

    /** @inheritdoc */
    public function rules()
    {
        return [
            // TODO: client validation
            //['image', 'required'],
            [['image'], 'trim'],
            ['image_remove', 'boolean'],
            ['image', 'file', 'maxSize' => 2097152],
        ];
    }

    public function behaviors()
    {
        return [
            'image' =>
                [
                    'class' => ImageUploadBehavior::className(),
                    'attribute' => 'image',
                    'thumbs' => [
                        'preview' => ['width' => 0, 'height' => 100],
                    ],
                    'filePath' => '@webroot/uploads/slider/[[id]]/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/slider/[[id]]/[[filename]].[[extension]]',
                    'thumbPath' => '@webroot/uploads/slider/[[id]]/[[filename]]_[[profile]].[[extension]]',
                    'thumbUrl' => '/uploads/slider/[[id]]/[[filename]]_[[profile]].[[extension]]',
                ],

            'sort' => [
                'class' => SortableListBehavior::className(),
                'sortableAttribute' => 'order',
            ],
        ];
    }

    public function attributeLabels()
    {
        return [
            'zone_id' => 'Зона',
            'name' => 'Название',
            'image' => 'Изображение',
            'text' => 'Текст'
        ];
    }
}