import { useState, useEffect } from "react";
import PlayerService from "../../services/PlayerService";

const WinScreen = ({ handleSaveGame, endGame, handleReset }) => {

    const [gameInfo, setGameInfo] = useState({
        winner: null,
        loser: null,
    });

    const [gameSaved, setGameSaved] = useState(false);

    useEffect(() => {
        Promise.all([PlayerService.findPlayer(endGame.winner_id), PlayerService.findPlayer(endGame.loser_id)])
            .then(res => {
                const temp = { ...gameInfo };
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

    const handlePlayAgainClicked = () => {
        setGameSaved(false);
        handleReset();
    }

    return (
        <div>
            <p className="game-over">GAME OVER</p>
            {/* <p className="result">RESULT</p> */}
            <p className="result">{gameInfo.winner} {endGame.w_score} - {endGame.l_score} {gameInfo.loser}</p>
            <div className="win-screen-menu">
                {!gameSaved ?
                    (<button className="confirm-button" onClick={handleSaveGameClicked}>SAVE GAME</button>) :
                    (<button className="inactive-confirm-button">GAME SAVED</button>)}
                <button className="back-to-menu" onClick={handlePlayAgainClicked}>PLAY AGAIN</button>
            </div>
        </div>
    )
}

export default WinScreen;