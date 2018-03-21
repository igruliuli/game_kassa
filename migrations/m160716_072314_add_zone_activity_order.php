<?php

use yii\db\Migration;

class m160716_072314_add_zone_activity_order extends Migration
{
    public function up()
    {
        $this->addColumn(\app\models\ZoneActivity::tableName(), 'order', $this->integer(10)->unsigned()->defaultValue(0));
        $this->createIndex('idx_zone_activity_order', \app\models\ZoneActivity::tableName(), 'order');
        $this->createIndex('idx_zone_activity_order_zone_id', \app\models\ZoneActivity::tableName(), ['zone_id', 'order']);
    }

    public function down()
    {
        $this->dropColumn(\app\models\ZoneActivity::tableName(), 'order');
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
