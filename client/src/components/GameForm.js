import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


const GameForm = ({ addToGameHistory }) => {
    
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [serveTracker, setServeTracker] = useState(0)
    const [winner, setWinner] = useState("")
    const [loser, setLoser] = useState("")
    const [w_score, setW_score] = useState("")
    const [l_score, setL_score] = useState("")
    
    const increase1 = (event) => {
        event.preventDefault()
        setCounter1(counter1 + 1)
    }

    const increase2 = (event) => {
        event.preventDefault()
        setCounter2(counter2 + 1)
    }

    useEffect(() => {
        setServeTracker(counter1 + counter2)
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
    }, [counter1, counter2])

    const handleWin = (event) => {
        event.preventDefault()

        
        const newGame = {
            date: new Date(),
            winner: winner,
            loser: loser,
            w_score: w_score,
            l_score: l_score
        }

        // console.log(newGame);
        addToGameHistory(newGame);
    }



    const serve = serveTracker % 4 < 2 ? 'serve' : 'noserve'  
    
    return(
        <div>
            <form onSubmit={handleWin}>
                <p>GAME FORM HERE</p>
                    <div>
                        <h1 className={serve}>{counter1}</h1>
                        <button onClick={increase1}>Add Point</button>
                    </div>
                    <div>
                        <h1 className={serve === 'noserve' ? 'serve' : 'noserve'}>{counter2}</h1>
                        <button onClick={increase2}>Add Point</button>
                    </div>
                    <div>
                        <p>{serveTracker}</p>
                    </div>
                    {/* <GameHistory data={currentGame} /> */}


                <input type="submit"></input>
            </form>
            <Link to="/">Home</Link>
           <p></p>
            <Link to="/game-history">
                        GAME HISTORY
                    </Link>
        </div>

    )
}

export default GameForm;