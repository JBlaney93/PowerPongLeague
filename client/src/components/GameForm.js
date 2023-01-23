import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import PlayerSelect from "./PlayerSelect";

const GameForm = ({ addToGameHistory, players }) => {

    const [counterObj, setCounterObj] = useState({
        c1: 0,
        c2: 0
    })
    
    const [serveTracker, setServeTracker] = useState(0)
    const serve = (serveTracker-1) % 4 < 2 ? 'serve' : 'noserve';
    
    const [winner, setWinner] = useState("");
    const [loser, setLoser] = useState("");
    const [w_score, setW_score] = useState("");
    const [l_score, setL_score] = useState("");
    
    const [gameWon, setGameWon] = useState(false);

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
            setWinner(player1);
            setLoser(player2);
            setW_score(counterObj.c1);
            setL_score(counterObj.c2);
            setGameWon(true);
        } else if (counterObj.c2 >= 11 && counterObj.c2 -2 >= counterObj.c1) {
            setWinner(player2);
            setLoser(player1);
            setW_score(counterObj.c2);
            setL_score(counterObj.c1);
            setGameWon(true);
        } 
        //  eslint-disable-next-line
    }, [counterObj])

    useEffect(()=>{
        if (player1 !== "" && player2 !== "") {
            setPlayersSelected(true)
        }
    }, [player1, player2])

    const handleWin = () => {

        const newGame = {
            datetime: new Date(),
            winner_id: winner,
            loser_id: loser,
            w_score: w_score,
            l_score: l_score
        }

        addToGameHistory(newGame);
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
                {!gameWon ? (
                <div>
                    <button 
                        onClick={()=>{increment('c1')}}
                        className={serve}>{counterObj.c1}
                    </button>
                    <button 
                        onClick={()=>{increment('c2')}} 
                        className={serve === 'noserve' ? 'serve' : 'noserve'}>{counterObj.c2}
                    </button>
                </div>
                ) : 
                (
                <div>
                    <p>winner: {winner} loser: {loser}</p>
                    <p>scores: {w_score} - {l_score}</p>
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