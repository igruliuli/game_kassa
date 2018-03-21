<?php

namespace app\models;

use yii\db\ActiveRecord;
use yiidreamteam\upload\ImageUploadBehavior;
use sortablelist\SortableListBehavior;
use app\validators\TagsValidator;


/**
 * @property integer $id
 * @property integer $zone_id
 * @property integer $order
 * @property string $name
 * @property string $image
 * @property string $text
 */
class ZoneActivity extends ActiveRecord
{
    public $image_remove = 0;

    /** @inheritdoc */
    public static function tableName()
    {
        return '{{%zone_activities}}';
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
            [['name', 'zone_id'], 'required'],
            ['text', 'required', 'enableClientValidation' => false],
            // TODO: client validation
            //['image', 'required'],
            ['name', 'string', 'max' => 128],
            ['text', TagsValidator::className(), 'max' => 315, 'enableClientValidation' => false],
            [['name', 'image', 'text'], 'trim'],
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
                        'normal' => ['width' => 227, 'height' => 127],
                    ],
                    'filePath' => '@webroot/uploads/zone-activity/[[id]]/image/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/zone-activity/[[id]]/image/[[filename]].[[extension]]',
                    'thumbPath' => '@webroot/uploads/zone-activity/[[id]]/image/[[filename]]_[[profile]].[[extension]]',
                    'thumbUrl' => '/uploads/zone-activity/[[id]]/image/[[filename]]_[[profile]].[[extension]]',
                ],

            'sort' => [
                'class' => SortableListBehavior::className(),
                'sortableAttribute' => 'order',
                'scope' => function ($query) {
                    $query->andWhere(['zone_id' => $this->zone_id]);
                },
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