<?php

use yii\db\Migration;

class m160714_073029_add_zone_activity extends Migration
{
    public function up()
    {
        $this->createTable(\app\models\ZoneActivity::tableName(), [
            'id' => $this->primaryKey(11),
            'zone_id' => $this->integer(11)->notNull(),
            'name' => $this->string(128)->notNull(),
            'image' => $this->text()
        ]);

        $this->addForeignKey('fk_zone_id', \app\models\ZoneActivity::tableName(), 'zone_id', \app\models\Zone::tableName(), 'id', 'CASCADE', 'CASCADE');
    }

    public function down()
    {
        $this->dropTable(\app\models\ZoneActivity::tableName());
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
