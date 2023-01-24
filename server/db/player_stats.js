const PlayerStats = (payload) => {
    
    const players = payload.players;
    const games = payload.games;

    console.log(games[0].winner_id, players[6]._id);

    for (let player of players) {

        player.wins = 0;
        player.losses = 0;
        player.total_games = 0;
        player.win_percentage = "na"
        player.weighted_score = "na"


        for (let game of games) {
            if (game.winner_id.equals(player._id)) {
                player.wins += 1;
                player.total_games += 1;

            } else if (game.loser_id.equals(player._id)) {
                player.losses += 1;
                player.total_games += 1;
            }
        }
        if (player.total_games > 0) {
            player.win_percentage = player.wins/player.total_games;
            player.weighted_score = player.win_percentage*(player.total_games/2);
        }
    }
    
    return [players];
}

module.exports = PlayerStats;



        // player.games_played = winCounter + lossesCounter;
        // player.winpercentage = winCounter/player.games_played;
        // player.weighted_score = player.winpercentage*player.games_played;