<?php

namespace app\modules\user\models;

/**
 * This is the ActiveQuery class for [[BillHistory]].
 *
 * @see BillHistory
 */
class BillHistoryQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * @inheritdoc
     * @return BillHistory[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @inheritdoc
     * @return BillHistory|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
