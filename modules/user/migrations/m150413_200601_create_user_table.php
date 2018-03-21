<?php

use yii\db\Schema;
use yii\db\Migration;

// to apply: yii migrate --migrationPath=@app/modules/user/migrations

class m150413_200601_create_user_table extends Migration
{
    public function up()
    {
		$this->createTable(\app\modules\user\models\User::tableName(), [
			'id' => $this->primaryKey(11)->unsigned(),
			'password' => 'VARCHAR(255) NOT NULL',
			'first_name' => $this->string(255),
			'last_name' => $this->string(255),
			'middle_name' => $this->string(255),
			'is_admin' => $this->boolean()->defaultValue(false)
		]);

		$this->createIndex('idx_is_admin', \app\modules\user\models\User::tableName(), 'is_admin');
    }

    public function down()
    {
		$this->dropTable(\app\modules\user\models\User::tableName());
    }
}
