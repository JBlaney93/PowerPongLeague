const GameHistoryItem = ({ game, index }) => {
    console.log(game)
    return(
        <div>
            <h2>WINNER: {game.winner} - Score: {game.w_score}</h2>
            <h2>LOSER: {game.loser} - Score {game.l_score}</h2>
        </div>
    )
}

export default GameHistoryItem;