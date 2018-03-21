<?php

namespace app\models;

use yii\db\ActiveRecord;
use sortablelist\SortableListBehavior;

/**
 * @property integer $id
 * @property integer $day
 * @property string $name
 * @property string $time
 * @property string $photo
 * @property string $position
 * @property string $topic
 * @property integer $order
 */
class LecturerSection extends ActiveRecord
{
    /** @inheritdoc */
    public static function tableName()
    {
        return '{{%lecturer_sections}}';
    }

    /** @inheritdoc */
    public function rules()
    {
        return [
            [['name', 'day'], 'required'],
            ['name', 'string', 'max' => 256],
            [['name'], 'trim'],
        ];
    }

    /** @inheritdoc */
    public function attributeLabels()
    {
        return [
            'name' => 'Название',
            'day' => 'День',
        ];
    }

    public function getLecturers()
    {
        return $this->hasMany(Lecturer::className(), ['section_id' => 'id'])->orderBy('time');
    }

    public function behaviors()
    {
        $day = $this->day;

        return [
            'sort' => [
                'class' => SortableListBehavior::className(),
                'sortableAttribute' => 'order',
                'scope' => function ($query) use ($day) {
                    $query->andWhere(['day' => $day]);
                },
            ],
        ];
    }
}