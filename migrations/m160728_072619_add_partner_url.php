<?php

use yii\db\Migration;

class m160728_072619_add_partner_url extends Migration
{
    public function up()
    {
        $this->addColumn(\app\models\Partner::tableName(), 'url', $this->string(128));
    }

    public function down()
    {
        $this->dropColumn(\app\models\Partner::tableName(), 'url');
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
