<?php
/**
 * @link https://github.com/himiklab/yii2-sortable-grid-view-widget
 * @copyright Copyright (c) 2014 HimikLab
 * @license http://opensource.org/licenses/MIT MIT
 */

namespace sortablelist;

use Yii;
use yii\base\Action;
use yii\base\InvalidConfigException;
use yii\helpers\Json;
use yii\web\BadRequestHttpException;

/**
 * Action for sortable Yii2 ListView widget.
 *
 * For example:
 *
 * ```php
 * public function actions()
 * {
 *    return [
 *       'sort' => [
 *          'class' => SortableListAction::className(),
 *          'modelName' => Model::className(),
 *       ],
 *   ];
 * }
 * ```
 *
 * @author HimikLab
 * @package himiklab\sortablegrid
 */
class SortableListAction extends Action
{
    public $modelName;

    public function run()
    {
        if (!$items = Yii::$app->request->post('items')) {
            throw new BadRequestHttpException('Don\'t received POST param `items`.');
        }
        /** @var \yii\db\ActiveRecord $model */
        $model = new $this->modelName;
        if (!$model->hasMethod('listSort')) {
            throw new InvalidConfigException(
                "Not found right `SortableListBehavior` behavior in `{$this->modelName}`."
            );
        }

        $model->listSort(Json::decode($items));
    }
}
