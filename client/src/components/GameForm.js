import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const GameForm = ({ addToGameHistory }) => {
    
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const [serveTracker, setServeTracker] = useState(0)
    const serve = serveTracker % 4 < 2 ? 'serve' : 'noserve'  

    const [winner, setWinner] = useState("")
    const [loser, setLoser] = useState("")
    const [w_score, setW_score] = useState("")
    const [l_score, setL_score] = useState("")

    const [gameWon, setGameWon] = useState(false);
    
    const increase1 = (event) => {
        setCounter1(counter1 + 1)
    }

    const increase2 = (event) => {
        setCounter2(counter2 + 1)
    }

    useEffect(() => {

        setServeTracker(counter1 + counter2);

        if (counter1 === 11 || counter2 === 11) {

            setGameWon(true);

            if (counter1 > counter2) {
                setWinner("Player 1")
                setLoser("Player 2")
                setW_score(counter1)
                setL_score(counter2)
            } else {
                setWinner("Player 2")
                setLoser("Player 1")
                setW_score(counter2)
                setL_score(counter1)
            }
        }

    }, [counter1, counter2])

    const handleWin = () => {

        const newGame = {
            datetime: new Date(),
            winner: winner,
            loser: loser,
            w_score: w_score,
            l_score: l_score
        }

        addToGameHistory(newGame);
    }
    
    return(
        <div>
            {!gameWon ? (
            <div>
                <button onClick={increase1} className={serve}>{counter1}</button>
                <button onClick={increase2} className={serve === 'noserve' ? 'serve' : 'noserve'}>{counter2}</button>
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
                Home
            </Link>
           <p></p>
            <Link to="/game-history">
                GAME HISTORY
            </Link>
        </div>

    )
}

export default GameForm;