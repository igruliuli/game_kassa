<?php

use yii\db\Migration;

class m160717_093717_add_lecturers_table extends Migration
{
    public function up()
    {
        $this->createTable(\app\models\Lecturer::tableName(), [
            'id' => $this->primaryKey(11)->unsigned(),
            'day' => $this->integer(2)->unsigned(),
            'name' => $this->string(128)->notNull(),
            'photo' => $this->text(),
            'time' => $this->string(32)->notNull(),
            'position' => $this->string()->notNull(),
            'topic' => $this->text()
        ]);
    }

    public function down()
    {
        $this->dropTable(\app\models\Lecturer::tableName());
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
