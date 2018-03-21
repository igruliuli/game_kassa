<?php

use yii\db\Migration;

class m160718_065647_partners_sort_field extends Migration
{
    public function up()
    {
        $this->addColumn(\app\models\Partner::tableName(), 'order', $this->integer(10)->unsigned()->defaultValue(0));
        $this->createIndex('idx_partner_order', \app\models\Partner::tableName(), 'order');
    }

    public function down()
    {
        $this->dropColumn(\app\models\Partner::tableName(), 'order');
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
