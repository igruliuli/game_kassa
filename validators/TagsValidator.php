<?php

namespace app\validators;

use Yii;
use yii\validators\StringValidator;

class TagsValidator extends StringValidator
{
    public function validateAttribute($model, $attribute)
    {
        $value = $model->$attribute;

        if (!is_string($value)) {
            $this->addError($model, $attribute, $this->message);

            return;
        }

        $checkedStr = str_replace(['&nbsp;', "\n"], '', strip_tags($value));
        $length = mb_strlen($checkedStr, $this->encoding);

/*        echo '<pre>';
        var_dump($checkedStr);
        var_dump($length); die;*/

        if ($this->min !== null && $length < $this->min) {
            $this->addError($model, $attribute, $this->tooShort, ['min' => $this->min]);
        }
        if ($this->max !== null && $length > $this->max) {
            $this->addError($model, $attribute, $this->tooLong, ['max' => $this->max]);
        }
        if ($this->length !== null && $length !== $this->length) {
            $this->addError($model, $attribute, $this->notEqual, ['length' => $this->length]);
        }
    }


}