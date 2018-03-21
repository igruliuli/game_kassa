<?php

namespace app\modules\user\models;

use Yii;

/**
 * This is the model class for table "bill_history".
 *
 * @property integer $id
 * @property string $amount
 * @property integer $account_id
 * @property integer $op_type
 * @property string $date
 * @property integer $who_add
 */
class BillHistory extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'bill_history';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['amount', 'account_id', 'who_add'], 'required'],
            [['id', 'account_id', 'op_type', 'who_add'], 'integer'],
            [['amount'], 'number'],
            [['date'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'amount' => Yii::t('app', 'Amount'),
            'account_id' => Yii::t('app', 'Account ID'),
            'op_type' => Yii::t('app', 'Op Type'),
            'date' => Yii::t('app', 'Date'),
            'who_add' => Yii::t('app', 'Who Add'),
        ];
    }

    public static function addRecord($amount, $type, $account_id, $who_add){
        if ($type == "add"){
            $type = 2;
        }else if($type == "sub"){
            $type = 1;
        }

        $record = new BillHistory();
        $record->amount = $amount;
        $record->op_type = $type;
        $record->account_id = $account_id;
        $record->who_add = $who_add;
        $record->save();
        return $record;
    }

    public static function getRecords($acc_id, $start, $end){
        $bills = BillHistory::find()
            ->where(['account_id' => $acc_id])
            ->andWhere(['between', 'date', $start, $end ])
            ->asArray()
            ->all();

        return $bills;

    }
}
