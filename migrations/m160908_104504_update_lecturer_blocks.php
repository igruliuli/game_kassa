<?php

use yii\db\Migration;

class m160908_104504_update_lecturer_blocks extends Migration
{
    public function up()
    {
        $this->addColumn(\app\models\LecturerSection::tableName(), 'order', $this->integer(10)->unsigned()->defaultValue(0));
        $this->createIndex('idx_lecturer_section_order', \app\models\LecturerSection::tableName(), 'order');

        $this->addColumn(\app\models\LecturerSection::tableName(), 'day', $this->integer(2)->unsigned());
        $this->createIndex('idx_lecturer_section_day', \app\models\LecturerSection::tableName(), 'day');

        $this->dropColumn(\app\models\Lecturer::tableName(), 'day');
    }

    public function down()
    {
        $this->dropColumn(\app\models\LecturerSection::tableName(), 'order');
        $this->dropColumn(\app\models\LecturerSection::tableName(), 'day');

        $this->addColumn(\app\models\Lecturer::tableName(), 'day', $this->integer(2)->unsigned());
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
