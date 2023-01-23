import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import PlayerSelect from "./PlayerSelect";

const GameForm = ({ addToGameHistory, players }) => {

    const [counterObj, setCounterObj] = useState({
        c1: 0,
        c2: 0
    });
    
    const [serveTracker, setServeTracker] = useState(0);
    const serve = (serveTracker-1) % 4 < 2 ? 'serve' : 'noserve';

    const [gameState, setGameState] = useState({
        gameWon: false
    });

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [playersSelected, setPlayersSelected] = useState(false);
    const [playersConfirmed, setPlayersConfirmed] = useState(false);

    const increment = (counter) => {
        const temp = {...counterObj};
        temp[counter] += 1;
        setCounterObj(temp);
    }

    useEffect(() => {

        setServeTracker(counterObj.c1 + counterObj.c2);

        if (counterObj.c1 >= 11 && counterObj.c1 -2 >= counterObj.c2) {
            const endGame = {
                datetime: new Date(),
                winner: player1,
                loser: player2,
                w_score: counterObj.c1,
                l_score: counterObj.c2,
                gameWon: true
            };
            setGameState(endGame);
            
        } else if (counterObj.c2 >= 11 && counterObj.c2 -2 >= counterObj.c1) {
            const endGame = {
                datetime: new Date(),
                winner: player1,
                loser: player2,
                w_score: counterObj.c1,
                l_score: counterObj.c2,
                gameWon: true
            };
            setGameState(endGame);
        } 
        //  eslint-disable-next-line
    }, [counterObj])

    useEffect(()=>{
        if (player1 !== "" && player2 !== "") {
            setPlayersSelected(true)
        }
    }, [player1, player2])

    const handleWin = () => {
        addToGameHistory(gameState);
    }
    
    const handleConfirm = () => {
        setPlayersConfirmed(true);
    }

    if (playersConfirmed === false) {
        return(
            <>
            <PlayerSelect players = {players} setPlayer1 = {setPlayer1} setPlayer2 = {setPlayer2}/>
            {playersSelected? (<button onClick={handleConfirm}>confirm</button>):null}
            </> 
        )
    } else {
        return(
            <div>
                {!gameState.gameWon ? (
                <div>
                    <button 
                        onClick={()=>{increment('c1')}}
                        className={serve}>{counterObj.c1}
                    </button>
                    <button 
                        onClick={()=>{increment('c2')}} 
                        data-testid="counter-button"
                        className={serve === 'noserve' ? 'serve' : 'noserve'}>{counterObj.c2}
                    </button>
                </div>
                ) : 
                (
                <div>
                    <p>winner: {gameState.winner} loser: {gameState.loser}</p>
                    <p>scores: {gameState.w_score} - {gameState.l_score}</p>
                    <button onClick={handleWin}>save game</button>
                </div>
                )
                }  
                <Link to="/">
                    Home</Link>
               <p></p>
                <Link to="/game-history">
                    GAME HISTORY</Link>
            </div>
        )
    }
}

export default GameForm;