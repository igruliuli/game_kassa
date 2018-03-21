<?php

namespace app\models;

use yii\db\ActiveRecord;
use yiidreamteam\upload\ImageUploadBehavior;

/**
 * @property integer $id
 * @property string $name
 * @property string $time
 * @property string $photo
 * @property string $position
 * @property string $topic
 *
 * @property LecturerSection $section
 */
class Lecturer extends ActiveRecord
{
    public $photo_remove = 0;

    /** @inheritdoc */
    public static function tableName()
    {
        return '{{%lecturers}}';
    }

    /** @inheritdoc */
    public function beforeSave($insert)
    {
        $parent = parent::beforeSave($insert);

        if ($this->photo_remove) {
            $this->getBehavior('photo')->cleanFiles();
            $this->photo = '';
        }

        return $parent;
    }

    /** @inheritdoc */
    public function rules()
    {
        return [
            [['name', 'time', 'position', 'topic'], 'required'],
            // TODO: client validation
            //[['photo'], 'required'],
            ['name', 'string', 'max' => 128],
            [['name', 'time', 'position', 'topic'], 'trim'],
            ['section_id', 'number'],
            [['photo_remove'], 'boolean'],
        ];
    }

    /** @inheritdoc */
    public function attributeLabels()
    {
        return [
            'time' => 'Время',
            'name' => 'Имя',
            'position' => 'Должность',
            'topic' => 'Тема выступления',
            'photo' => 'Фото',
            'section_id' => 'Блок'
        ];
    }

    public function getSection()
    {
        return $this->hasOne(LecturerSection::className(), ['id' => 'section_id']);
    }

    public function behaviors()
    {
        return [
            'photo' =>
                [
                    'class' => ImageUploadBehavior::className(),
                    'attribute' => 'photo',
                    'thumbs' => [
                        'normal' => ['width' => 80, 'height' => 80],
                    ],
                    'filePath' => '@webroot/uploads/lecturer/[[id]]/photo/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/lecturer/[[id]]/photo/[[filename]].[[extension]]',
                    'thumbPath' => '@webroot/uploads/lecturer/[[id]]/photo/[[filename]]_[[profile]].[[extension]]',
                    'thumbUrl' => '/uploads/lecturer/[[id]]/photo/[[filename]]_[[profile]].[[extension]]',
                ],
        ];
    }
}