<?php

use yii\db\Migration;

class m160722_114012_add_carousel_slide_order extends Migration
{
    public function up()
    {
        $this->addColumn(\app\models\CarouselSlide::tableName(), 'order', $this->integer(10)->unsigned()->defaultValue(0));
        $this->createIndex('idx_carousel_order', \app\models\CarouselSlide::tableName(), 'order');
    }

    public function down()
    {
        $this->dropColumn(\app\models\CarouselSlide::tableName(), 'order');
    }
    /*
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
    }

    public function safeDown()
    {
    }
    */
}
