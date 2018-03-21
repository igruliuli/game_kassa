<?php

use yii\db\Migration;

class m160905_143646_add_lecturer_section extends Migration
{
    public function up()
    {
        $this->createTable(\app\models\LecturerSection::tableName(),[
            'id' => $this->primaryKey(11)->unsigned(),
            'name' => $this->string(256)->notNull()
        ]);

        $this->addColumn(\app\models\Lecturer::tableName(), 'section_id', $this->integer(11)->unsigned());
        $this->addForeignKey(
            'fk_lecturer_section',
            \app\models\Lecturer::tableName(),
            'section_id',
            \app\models\LecturerSection::tableName(),
            'id',
            'SET NULL',
            'CASCADE'
        );
    }

    public function down()
    {
        $this->dropForeignKey('fk_lecturer_section', \app\models\Lecturer::tableName());
        $this->dropColumn(\app\models\Lecturer::tableName(), 'section_id');
        $this->dropTable(\app\models\LecturerSection::tableName());
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
