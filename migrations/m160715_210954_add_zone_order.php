<?php

use yii\db\Migration;

class m160715_210954_add_zone_order extends Migration
{
    public function up()
    {
        $this->addColumn(\app\models\Zone::tableName(), 'order', $this->integer(10)->unsigned()->defaultValue(0));
        $this->createIndex('idx_zone_order', \app\models\Zone::tableName(), 'order');
    }

    public function down()
    {
        $this->dropColumn(\app\models\Zone::tableName(), 'order');
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
