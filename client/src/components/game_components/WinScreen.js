import { useState, useEffect } from "react";
import PlayerService from "../../services/PlayerService";

const WinScreen = ({handleSaveGame, endGame}) => {

    const [gameInfo, setGameInfo] = useState({
        winner: null,
        loser: null,
    })

    const [gameSaved, setGameSaved] = useState(false)


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

    const handleSaveGameClicked = () => {
        setGameSaved(true);
        handleSaveGame();
    }

    return (
        <div>
            <p className="game-over">GAME OVER</p>
            <p>result:</p>
            <p>{gameInfo.winner} {endGame.w_score} - {endGame.l_score} {gameInfo.loser}</p>
            {!gameSaved? 
            (<button className="confirm-button" onClick={handleSaveGameClicked}>SAVE GAME</button>):
            (<button className="inactive-confirm-button">game saved</button>)}
        </div>
    )
 }
 
 
 export default WinScreen;