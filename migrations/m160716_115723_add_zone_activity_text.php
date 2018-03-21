<?php

use yii\db\Migration;

class m160716_115723_add_zone_activity_text extends Migration
{
    public function up()
    {
        $this->addColumn(\app\models\ZoneActivity::tableName(), 'text', $this->text()->after('name'));
    }

    public function down()
    {
        $this->dropColumn(\app\models\ZoneActivity::tableName(), 'text');
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
