<?php

use yii\db\Migration;

class m160714_070559_add_zone extends Migration
{
    public function up()
    {
        $this->createTable(\app\models\Zone::tableName(), [
            'id' => $this->primaryKey(11),
            'name' => $this->string(128)->notNull(),
            'image' => $this->text()
        ]);
    }

    public function down()
    {
        $this->dropTable(\app\models\Zone::tableName());
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
