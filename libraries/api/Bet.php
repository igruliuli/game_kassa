<?php

namespace app\libraries\api;

class Bet extends ApiModel
{
    /**
     * @param integer $gameId - unique ID for the game
     */
    public function recordBet($bet, $sum, $gameNumber, $gameId)
    {
        $service = new ApiService();

        $response = $service->secureRequest('api/bet', '', [
            'bet' => $bet,
            'sum' => $sum,
            'round_id' => $gameNumber,
            'game_id' => $gameId
        ], 'post');

        $content = $response->getContent();

        return $content;
    }
}