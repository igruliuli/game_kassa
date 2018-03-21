<?php

use yii\db\Migration;

class m160804_104014_add_participants_table extends Migration
{
    public function up()
    {
        $this->createTable(\app\models\Participant::tableName(), [
            'id' => $this->primaryKey(11)->unsigned(),
            'picture' => $this->text(),
            'order' => $this->integer(10)->unsigned()->defaultValue(0),
            'url' => $this->string(128)
        ]);

        $this->createIndex('idx_participant_order', \app\models\Participant::tableName(), 'order');
    }

    public function down()
    {
        $this->dropTable(\app\models\Participant::tableName());
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
