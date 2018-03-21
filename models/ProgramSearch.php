<?php

namespace app\models;

use yii\data\ActiveDataProvider;
use yii\db\ActiveQuery;
use yii\base\Model;

class ProgramSearch extends Model
{
    public $id;
    public $zone_id;
    public $name;
    public $day;

    public function rules()
    {
        return [
            [['id', 'name', 'zone_id', 'day'], 'safe']
        ];
    }

    /**
     * @param $query ActiveQuery
     */
    public function search($query, $params, $dataProviderParams = [])
    {
        $query = $query->with('zone');

        $dataProviderParams['query'] = $query;

        $dataProvider = new ActiveDataProvider($dataProviderParams);

        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'zone_id' => $this->zone_id,
            'day' => $this->day,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name]);

        return $dataProvider;
    }
}