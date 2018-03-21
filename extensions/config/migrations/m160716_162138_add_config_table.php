<?php

use yii\db\Migration;

class m160716_162138_add_config_table extends Migration
{
    public function up()
    {
        $this->createTable('{{%config}}', [
            'key' => 'VARCHAR(128) NOT NULL',
            'value' => 'TEXT',
            'PRIMARY KEY (`key`)'
        ]);
    }

    public function down()
    {
        $this->dropTable('{{%config}}');
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
