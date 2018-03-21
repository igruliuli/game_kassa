<?php

use yii\db\Migration;

class m160804_110609_add_foodcourt_table extends Migration
{
    public function up()
    {
        $this->createTable(\app\models\Foodcourt::tableName(), [
            'id' => $this->primaryKey(11)->unsigned(),
            'title' => $this->string(128)->notNull(),
            'picture' => $this->text(),
            'order' => $this->integer(10)->unsigned()->defaultValue(0),
        ]);

        $this->createIndex('idx_foodcourt_order', \app\models\Foodcourt::tableName(), 'order');
    }

    public function down()
    {
        $this->dropTable(\app\models\Foodcourt::tableName());
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
