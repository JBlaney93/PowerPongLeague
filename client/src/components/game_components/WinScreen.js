import { useState, useEffect } from "react";
import PlayerService from "../../services/PlayerService";

const WinScreen = ({handleSaveGame, endGame}) => {

    const [gameInfo, setGameInfo] = useState({
        winner: null,
        loser: null,
    })


    useEffect(()=>{
        Promise.all([PlayerService.findPlayer(endGame.winner_id), PlayerService.findPlayer(endGame.loser_id)])
        .then(res => {
            const temp = {...gameInfo};
            temp.winner = res[0].name;
            temp.loser = res[1].name;
            setGameInfo(temp);
        })
    },
    [endGame, gameInfo])

    return (
        <div>
            <p className="game-over">GAME OVER</p>
            <p>result:</p>
            <p>{gameInfo.winner} {endGame.w_score} - {endGame.l_score} {gameInfo.loser}</p>
            <button className="confirm-button" onClick={()=>{handleSaveGame()}}>SAVE GAME</button>
        </div>
    )
 }
 
 
 export default WinScreen;