<?php

namespace app\modules\user\models;

use Yii;

/**
 * This is the model class for table "sourses".
 *
 * @property integer $id
 * @property string $name
 * @property integer $enabled
 * @property integer $jackpot
 * @property integer $jp_percent2
 * @property integer $min_bet
 * @property integer $max_bet
 * @property integer $all_bet_pre_rount_sum
 * @property integer $all_bet_pre_rount_count
 */
class Sourses extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'sourses';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'min_bet', 'max_bet'], 'required'],
            [['enabled', 'jackpot', 'jp_percent2', 'min_bet', 'max_bet', 'all_bet_pre_rount_sum', 'all_bet_pre_rount_count'], 'integer'],
            [['name'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', 'Name'),
            'enabled' => Yii::t('app', 'Enabled'),
            'jackpot' => Yii::t('app', 'Jackpot'),
            'jp_percent2' => Yii::t('app', 'Persent'),
            'min_bet' => Yii::t('app', 'Bet Min'),
            'max_bet' => Yii::t('app', 'Bet Max'),
            'all_bet_pre_rount_sum' => Yii::t('app', 'All Bet Pre Rount Sum'),
            'all_bet_pre_rount_count' => Yii::t('app', 'All Bet Pre Rount Count'),
        ];
    }

    public static function getSourses(){
        $bills = Sourses::find()
            ->asArray()
            ->all();

        return $bills;

    }

    public function setBets($id, $min, $max, $all){
        if ($all == false){
            $model = Sourses::findOne($id);
            $model->min_bet = $min;
            $model->max_bet = $max;
            $model->update();
        }else{
           Sourses::updateAll(['min_bet' => $min, 'max_bet' => $max]);
        }
    }

    public function setPercent($id, $percent, $all){
        if ($all == false){
            $model = Sourses::findOne($id);
            $model->jp_percent2 = $percent;
            $model->update();
        }else{
            Sourses::updateAll(['jp_percent2' => $percent]);
        }
    }

    public function setToggle($id, $oldValue){
        $model = Sourses::findOne($id);
        if ($oldValue == 1){
            $model->enabled = 0;
        }else{
            $model->enabled = 1;
        }
        $model->update();
    }

    public function switchAll($toggle){
        if ($toggle == 'off'){
            Sourses::updateAll(['enabled' => 0]);
        }else{
            Sourses::updateAll(['enabled' => 1]);
        }
    }


}
