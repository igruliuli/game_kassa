<?php

use yii\db\Migration;

class m160801_084710_add_description_to_zone extends Migration
{
    public function up()
    {
        $this->addColumn(\app\models\Zone::tableName(), 'description', $this->text());
    }

    public function down()
    {
        $this->dropColumn(\app\models\Zone::tableName(), 'description');
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
