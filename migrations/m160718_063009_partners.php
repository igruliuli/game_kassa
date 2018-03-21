<?php

use yii\db\Migration;

class m160718_063009_partners extends Migration
{
    public function up()
    {
        $this->createTable(\app\models\Partner::tableName(), [
            'id' => $this->primaryKey(11)->unsigned(),
            'name' => $this->string(128)->notNull(),
            'picture' => $this->text(),
        ]);
    }

    public function down()
    {
        $this->dropTable(\app\models\Partner::tableName());
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
