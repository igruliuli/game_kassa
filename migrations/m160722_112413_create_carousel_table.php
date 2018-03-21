<?php

use yii\db\Migration;

/**
 * Handles the creation for table `carousel`.
 */
class m160722_112413_create_carousel_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable(\app\models\CarouselSlide::tableName(), [
            'id' => $this->primaryKey(11),
            'image' => $this->text()
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable(\app\models\CarouselSlide::tableName());
    }
}
