<?php

use yii\db\Schema;
use yii\db\Migration;

// to apply: yii migrate --migrationPath=@app/modules/user/migrations

class m150413_200601_create_user_table extends Migration
{
    public function up()
    {
		$this->createTable('{{%user}}', [
			'id' => 'INT(11) UNSIGNED NOT NULL AUTO_INCREMENT',
			'email' => $this->string(255)->notNull(),
			'password' => 'VARCHAR(255) NOT NULL',
			'first_name' => $this->string(255),
			'last_name' => $this->string(255),
			'middle_name' => $this->string(255),
			'is_admin' => 'TINYINT(1) DEFAULT "0"',
			'PRIMARY KEY (`id`)'
		]);

		$this->createIndex('idx_email', '{{%user}}', 'email', true);
		$this->createIndex('idx_is_admin', '{{%user}}', 'is_admin');

		// create first admin
		\app\modules\user\models\User::createFirstAdmin();
    }

    public function down()
    {
		$this->dropTable('{{%user}}');
    }
}
