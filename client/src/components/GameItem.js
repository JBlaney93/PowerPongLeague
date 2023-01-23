import { useEffect, useState } from "react";
import PlayerService from "../services/PlayerService";

const GameItem = ({ game, index }) => {

    const dateTime = new Date (game.datetime)
    console.log("dateTime:", dateTime)

    const dateTimeFormat = dateTime.toDateString()
    console.log(dateTimeFormat)

    const day = dateTime.getDay()
    const month = dateTime.getMonth() + 1
    const year = dateTime.getFullYear()
    

    const [winner, setWinner] = useState("");
    const [loser, setLoser] = useState("");

    useEffect(()=> {

        Promise.all([PlayerService.findPlayer(game.winner_id), PlayerService.findPlayer(game.loser_id)])
        .then(result => {
            setWinner(result[0]);
            setLoser(result[1]);
        })

    }, [])

    return(
        <div>
            <p>WINNER: {winner.name} - Score: {game.w_score}</p>
            <p>LOSER: {loser.name} - Score {game.l_score}</p>
            <p>{dateTimeFormat}</p>
            <p>{day} / {month} / {year}</p>
        </div>
    )
}

export default GameItem;