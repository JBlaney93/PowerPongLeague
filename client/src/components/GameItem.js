const GameItem = ({ game, index }) => {
    console.log(game)
    return(
        <div>
            <p>WINNER: {game.winner_id} - Score: {game.w_score}</p>
            <p>LOSER: {game.loser_id} - Score {game.l_score}</p>
        </div>
    )
}

export default GameItem;