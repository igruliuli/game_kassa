<?php

use yii\db\Migration;

/**
 * Handles the creation for table `news`.
 */
class m160723_064058_create_news_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable(\app\models\News::tableName(), [
            'id' => $this->primaryKey(11),
            'title' => $this->string(128)->notNull(),
            'picture' => $this->text(),
            'text' => $this->text()->notNull(),
            'date' => $this->dateTime()
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable(\app\models\News::tableName());
    }
}
