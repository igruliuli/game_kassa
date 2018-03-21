<?php
    /** @var \app\models\Bet $bet */
?>
<pre>
    <?php
        echo 'Ставка ' . $bet->id . ' на сумму ' . $bet->amount;
    ?>
</pre>
<img src="/api/barcode/<?php echo $bet->id; ?>" />
