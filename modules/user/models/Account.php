<?php

namespace app\modules\user\models;

use app\modules\user\exceptions\NotEnoughMoney;
use yii\db\ActiveRecord;
use yii\db\Expression;
use yii\db\Query;

/**
 * @property integer $id
 * @property string $name
 * @property integer $status
 * @property string $created_at
 * @property integer $parent_id
 * @property integer $level
 * @property float $balance
 * @property string $currency
 * @property string $note
 * @property boolean $can_change_minmax
 * @property boolean $can_change_accounts
 * @property array $bet_settings
 *
 * @property Account $parent
 */
class Account extends ActiveRecord
{
    const CURRENCY_KZT = 'KZT';
    const CURRENCY_RUR = 'RUR';
    const CURRENCY_TJS = 'TJS';

    public static function tableName()
    {
        return '{{accounts}}';
    }

    public function beforeSave($insert)
    {
        if (empty($this->bet_settings)) {
            $this->bet_settings = self::betSettingsDefault();
        }

        $this->bet_settings = json_encode($this->bet_settings);
        return parent::beforeSave($insert);
    }

    public function afterFind()
    {
        parent::afterFind();
        $this->bet_settings = (array)json_decode($this->bet_settings);
    }

    public function afterSave($insert, $changedAttributes)
    {
        if ($insert || $this->isAttributeChanged('parent_id')) {
            \Yii::$app->db->createCommand('select calculate_hierarchy();')->execute();
        }

        parent::afterSave($insert, $changedAttributes);
    }

    public function rules()
    {
        return [
            ['name', 'required']
        ];
    }

    /** @return Account */
    public static function createFirstAccount()
    {
        $account = new Account();
        $account->name = 'Test account';
        $account->save();

        return $account;
    }

    public static function betSettingsDefault()
    {
        return [
            'count' => null,
            'volume' => null,
            'profit' => null,
            'softlimit' => null,
            'phones' => null
        ];
    }

    public function getParent()
    {
        return $this->hasOne(Account::className(), ['id' => 'parent_id']);
    }

    public function getHierarchyLevel()
    {
        $currentHierarchyItem = (new Query())
            ->select('*')
            ->from('account_hierarchy')
            ->where(['id' => $this->id])
            ->one();

        return $currentHierarchyItem['hierarchy_level'];
    }

    public function getRelativeLevel($masterLevel)
    {
        return $this->getHierarchyLevel() - $masterLevel;
    }

    /**
     * Returns all child accounts together with current account
     * @return Account[]
     */
    public function getTree()
    {
        $query = new Query();

        $currentHierarchyItem = (new Query())
            ->select('*')
            ->from('account_hierarchy')
            ->where(['id' => $this->id])
            ->one();

        $hierarchy = $query->select('*')
            ->from('account_hierarchy')
            ->where(
                new Expression('CAST(SUBSTRING(hierarchy_path,((:level - 1) * 32 + 1),32) AS INT) = :user_id'),
                [
                    ':level' => $currentHierarchyItem['hierarchy_level'],
                    ':user_id' =>  $this->id
                ]
            )
            ->all();

        $tree = [];

        foreach ($hierarchy as $child) {
            $childPartner = Account::findOne($child['id']);
            $tree[] = $childPartner;
        }

        return $tree;
    }

    public function addBalance($amount)
    {
        $this->balance = $this->balance + $amount;
        $this->save();
    }

    public function decreaseBalance($amount)
    {
        if ($amount > $this->balance) {
            throw new NotEnoughMoney();
        }

        $this->balance = $this->balance - $amount;
        $this->save();
    }

    /**
     * @return boolean
     */
    public function isChildAccount($id)
    {
        if ($this->id == $id) {
            return false;
        }

        $query = new Query();

        $currentHierarchyItem = (new Query())
            ->select('*')
            ->from('account_hierarchy')
            ->where(['id' => $this->id])
            ->one();

        return $query->select('id')
            ->from('account_hierarchy')
            ->where(
                new Expression('CAST(SUBSTRING(hierarchy_path,((:level - 1) * 32 + 1),32) AS INT) = :account_id'),
                [
                    ':level' => $currentHierarchyItem['hierarchy_level'],
                    ':account_id' =>  $this->id
                ]
            )
            ->exists();
    }
}