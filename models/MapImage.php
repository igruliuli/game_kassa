<?php

namespace app\models;

use config\Config;
use yii\base\Model;
use yii\base\ModelEvent;
use yii\db\ActiveRecord;
use yii\db\BaseActiveRecord;
use yiidreamteam\upload\ImageUploadBehavior;

class MapImage extends ActiveRecord
{
    /** @var  string */
    public $image;
    /** @var  boolean */
    public $image_remove = 0;

    public $isNewRecord = true;

    public static function tableName()
    {
        return '{{%config}}';
    }

    public function __construct(array $config = [])
    {
        parent::__construct($config);

        $record = Config::findOne(['key' => 'map_image']);

        if (!is_null($record)) {
            $this->image = $record->value;
        }
    }

    public function behaviors()
    {
        return [
            'image' =>
                [
                    'class' => ImageUploadBehavior::className(),
                    'attribute' => 'image',
                    'filePath' => '@webroot/uploads/map/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/map/[[filename]].[[extension]]',
                ],
        ];
    }

    public function rules()
    {
        return [
            [['image'], 'trim'],
            [['image_remove'], 'boolean']
        ];
    }

    public function attributeLabels()
    {
        return [
            'image' => 'Изображение карты феста'
        ];
    }

    public function save($runValidation = true, $attributeNames = null)
    {
        if ($this->image_remove) {
            $this->getBehavior('image')->cleanFiles();

            $this->image = '';

            $record = Config::findOne(['key' => 'map_image']);

            if (is_null($record)) {
                $record = new Config();
                $record->key = 'map_image';
            }

            $record->value = $this->image;
            $record->save();

            return;
        }

        $this->beforeValidate();
        $this->trigger(BaseActiveRecord::EVENT_BEFORE_INSERT, new ModelEvent());

        if ($this->image == '') {
            // case when there is old image
            $this->refresh();
            return;
        }

        $record = Config::findOne(['key' => 'map_image']);

        if (is_null($record)) {
            $record = new Config();
            $record->key = 'map_image';
        }

        $record->value = $this->image;
        $record->save();

        $this->trigger(BaseActiveRecord::EVENT_AFTER_INSERT, new ModelEvent());
    }

    public function refresh()
    {
        $record = Config::findOne(['key' => 'map_image']);

        if (!is_null($record)) {
            $this->image = $record->value;
        }
    }
}