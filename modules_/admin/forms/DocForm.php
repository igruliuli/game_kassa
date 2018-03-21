<?php

namespace app\modules\admin\forms;

use yii\db\ActiveRecord;
use yiidreamteam\upload\FileUploadBehavior;
use config\Config;
use yii\db\BaseActiveRecord;
use yii\base\ModelEvent;

class DocForm extends ActiveRecord
{
    public $visiting_rules;
    public $participation_terms;
    public $sponsorship_proposal;
    public $participant_form;
    public $sponsor_form;

    public $visiting_rules_remove = 0;
    public $participation_terms_remove = 0;
    public $sponsorship_proposal_remove = 0;

    public $isNewRecord = true;

    public static function tableName()
    {
        return '{{%config}}';
    }

    public function __construct(array $config = [])
    {
        parent::__construct($config);

        $this->refresh();
    }


    public function behaviors()
    {
        return [
            'visiting_rules' =>
                [
                    'class' => FileUploadBehavior::className(),
                    'attribute' => 'visiting_rules',
                    'filePath' => '@webroot/uploads/docs/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/docs/[[filename]].[[extension]]'
                ],
            'participation_terms' =>
                [
                    'class' => FileUploadBehavior::className(),
                    'attribute' => 'participation_terms',
                    'filePath' => '@webroot/uploads/docs/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/docs/[[filename]].[[extension]]'
                ],
            'sponsorship_proposal' =>
                [
                    'class' => FileUploadBehavior::className(),
                    'attribute' => 'sponsorship_proposal',
                    'filePath' => '@webroot/uploads/docs/[[filename]].[[extension]]',
                    'fileUrl' => '/uploads/docs/[[filename]].[[extension]]'
                ],
        ];
    }

    public function rules()
    {
        return [
            [['visiting_rules', 'participation_terms', 'sponsorship_proposal'], 'trim'],
            [['visiting_rules_remove', 'participation_terms_remove', 'sponsorship_proposal_remove'], 'boolean'],
            [['visiting_rules', 'participation_terms', 'sponsorship_proposal'], 'file', 'maxSize' => 5242880],
            [['participant_form', 'sponsor_form'], 'url']
        ];
    }

    public function attributeLabels()
    {
        return [
            'visiting_rules' => 'Правила посещения',
            'participation_terms' => 'Условия участия',
            'sponsorship_proposal' => 'Спонсорское предложение',
            'participant_form' => 'Стать участником (ссылка)',
            'sponsor_form' => 'Стать спонсором (ссылка)'
        ];
    }

    public function compose()
    {
        $result = [];

        foreach ($this->attributes as $key => $value) {
            $result[] = [$key, $value];
        }

        return $result;
    }

    public function refresh($key = null)
    {
        if (!is_null($key)) {
            $file = Config::findOne(['key' => $key]);
            if ($file) {
                $this->$key = $file->value;
            }
            return;
        }

        $visiting_rules = Config::findOne(['key' => 'visiting_rules']);
        $participation_terms = Config::findOne(['key' => 'participation_terms']);
        $sponsorship_proposal = Config::findOne(['key' => 'sponsorship_proposal']);
        $sponsor_form = Config::findOne(['key' => 'sponsor_form']);
        $participant_form = Config::findOne(['key' => 'participant_form']);

        if (!is_null($visiting_rules)) {
            $this->visiting_rules = $visiting_rules->value;
        }

        if (!is_null($participation_terms)) {
            $this->participation_terms = $participation_terms->value;
        }

        if (!is_null($sponsorship_proposal)) {
            $this->sponsorship_proposal = $sponsorship_proposal->value;
        }

        if (!is_null($sponsor_form)) {
            $this->sponsor_form = $sponsor_form->value;
        }

        if (!is_null($participant_form)) {
            $this->participant_form = $participant_form->value;
        }
    }

    public function save($runValidation = true, $attributeNames = null)
    {
        // improve this shit further
        // remove files when needed
        if ($this->visiting_rules_remove) {
            $this->getBehavior('visiting_rules')->cleanFiles();

            $this->visiting_rules = '';

            $record = Config::findOne(['key' => 'visiting_rules']);

            if (is_null($record)) {
                $record = new Config();
                $record->key = 'visiting_rules';
            }

            $record->value = $this->visiting_rules;
            $record->save();
        }

        if ($this->participation_terms_remove) {
            $this->getBehavior('participation_terms')->cleanFiles();

            $this->participation_terms = '';

            $record = Config::findOne(['key' => 'participation_terms']);

            if (is_null($record)) {
                $record = new Config();
                $record->key = 'participation_terms';
            }

            $record->value = $this->participation_terms;
            $record->save();
        }

        if ($this->sponsorship_proposal_remove) {
            $this->getBehavior('sponsorship_proposal')->cleanFiles();

            $this->sponsorship_proposal = '';

            $record = Config::findOne(['key' => 'sponsorship_proposal']);

            if (is_null($record)) {
                $record = new Config();
                $record->key = 'sponsorship_proposal';
            }

            $record->value = $this->sponsorship_proposal;
            $record->save();
        }

        $this->beforeValidate();
        $this->trigger(BaseActiveRecord::EVENT_BEFORE_INSERT, new ModelEvent());

        if ($this->visiting_rules == '') {
            // case when there is old image
            $this->refresh('visiting_rules');
        }

        if ($this->participation_terms == '') {
            // case when there is old image
            $this->refresh('participation_terms');
        }

        if ($this->sponsorship_proposal == '') {
            // case when there is old image
            $this->refresh('sponsorship_proposal');
        }

        $visiting_rules = Config::findOne(['key' => 'visiting_rules']);

        if (is_null($visiting_rules)) {
            $visiting_rules = new Config();
            $visiting_rules->key = 'visiting_rules';
        }

        $visiting_rules->value = $this->visiting_rules;
        $visiting_rules->save();

        $participation_terms = Config::findOne(['key' => 'participation_terms']);

        if (is_null($participation_terms)) {
            $participation_terms = new Config();
            $participation_terms->key = 'participation_terms';
        }

        $participation_terms->value = $this->participation_terms;
        $participation_terms->save();

        $sponsorship_proposal = Config::findOne(['key' => 'sponsorship_proposal']);

        if (is_null($sponsorship_proposal)) {
            $sponsorship_proposal = new Config();
            $sponsorship_proposal->key = 'sponsorship_proposal';
        }

        $participant_form = Config::findOne(['key' => 'participant_form']);

        if (is_null($participant_form)) {
            $participant_form = new Config();
            $participant_form->key = 'participant_form';
        }

        $participant_form->value = $this->participant_form;
        $participant_form->save();

        $sponsor_form = Config::findOne(['key' => 'sponsor_form']);

        if (is_null($sponsor_form)) {
            $sponsor_form = new Config();
            $sponsor_form->key = 'sponsor_form';
        }

        $sponsor_form->value = $this->sponsor_form;
        $sponsor_form->save();

        $this->trigger(BaseActiveRecord::EVENT_AFTER_INSERT, new ModelEvent());

        return true;
    }
}