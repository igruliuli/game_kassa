<?php

namespace app\models;

use yii\db\ActiveRecord;
use yii\helpers\ArrayHelper;
use yiidreamteam\upload\ImageUploadBehavior;
use sortablelist\SortableListBehavior;

/**
 * @property integer $id
 * @property string $name
 * @property string $image
 * @property string $description
 *
 * @property ZoneActivity[] $activities
 */
class Zone extends ActiveRecord
{
    public $image_remove = 0;

    /** @inheritdoc */
    public static function tableName()
    {
        return '{{%zones}}';
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

    public function getActivities()
    {
        return $this->hasMany(ZoneActivity::className(), ['zone_id' => 'id'])->orderBy('order');
    }

    /** @inheritdoc */
    public function rules()
    {
        return [
            [['name', 'description'], 'required'],
            // TODO: client validation
            //['image', 'required'],
            ['name', 'string'],
            ['name', 'string', 'max' => 50],
            [['name', 'image', 'description'], 'trim'],
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
                        'normal' => ['width' => 128, 'height' => 128],
                    ],
                    'filePath' => '@webroot/uploads/zone/[[id]]/image/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/zone/[[id]]/image/[[filename]].[[extension]]',
                    'thumbPath' => '@webroot/uploads/zone/[[id]]/image/[[filename]]_[[profile]].[[extension]]',
                    'thumbUrl' => '/uploads/zone/[[id]]/image/[[filename]]_[[profile]].[[extension]]',
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
            'image' => 'Изображение',
            'name' => 'Название',
            'description' => 'Описание',
        ];
    }

    public static function getList()
    {
        $list = self::find()->asArray()->all();

        $list = ArrayHelper::map($list, 'id', 'name');

        return $list;
    }
}