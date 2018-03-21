<?php

use yii\db\Migration;

class m160717_081037_add_program_table extends Migration
{
    public function up()
    {
        $this->createTable(\app\models\ProgramItem::tableName(), [
            'id' => $this->primaryKey(11)->unsigned(),
            'day' => $this->integer(2)->unsigned(),
            'zone_id' => $this->integer(11)->notNull(),
            'name' => $this->string(128)->notNull(),
            'time' => $this->string(32)->notNull()
        ]);

        $this->addForeignKey(
            'fk_program_zone_id',
            \app\models\ProgramItem::tableName(),
            'zone_id',
            \app\models\Zone::tableName(),
            'id',
            'CASCADE',
            'CASCADE'
        );
    }

    public function down()
    {
        $this->dropTable(\app\models\ProgramItem::tableName());
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
