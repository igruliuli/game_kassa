<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "game_rounds".
 *
 * @property integer $id
 * @property integer $server_number
 * @property string $results
 * @property string $end_time
 * @property string $g_name
 */
class GameRounds extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'game_rounds';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'server_number', 'end_time'], 'required'],
            [['id', 'server_number'], 'integer'],
            [['results', 'end_time', 'g_name'], 'string'],
            [['id', 'server_number'], 'unique', 'targetAttribute' => ['id', 'server_number'], 'message' => 'The combination of ID and Server Number has already been taken.'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'server_number' => 'Server Number',
            'results' => 'Results',
            'end_time' => 'End Time',
            'g_name' => 'G Name',
        ];
    }
}
