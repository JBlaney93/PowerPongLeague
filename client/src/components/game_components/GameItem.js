import { useEffect, useState } from "react";
import PlayerService from "../../services/PlayerService";

const GameItem = ({ game, index }) => {

    // console.log(game);

    const dateTime = new Date (game.datetime)
    // const dateTimeFormat = dateTime.toDateString()
    const day = dateTime.getDay()
    const timeString = dateTime.toLocaleTimeString()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    
    const [winner, setWinner] = useState({name: ""});
    const [loser, setLoser] = useState({name: ""});

    // console.log(winner.name, loser.name);

    useEffect(()=> {

        Promise.all([PlayerService.findPlayer(game.winner_id), PlayerService.findPlayer(game.loser_id)])
        .then(result => {
            setWinner(result[0]);
            setLoser(result[1]);
            // console.log(game, result);
        })

    }, [game])

    return(
        <div className="player-names-div">
            <p className="game-history-p1"><span className="player-score-text">{winner.name} {game.w_score}  -  {game.l_score} {loser.name}</span></p>
            <p className="game-history-p2"> {day} / {month} / {year} | {timeString}</p>
        </div>
    )
}

export default GameItem;