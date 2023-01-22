import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const GameForm = ({ addToGameHistory, players }) => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    
    const [serveTracker, setServeTracker] = useState(0)
    const serve = (serveTracker-1) % 4 < 2 ? 'serve' : 'noserve';
    
    const [winner, setWinner] = useState("");
    const [loser, setLoser] = useState("");
    const [w_score, setW_score] = useState("");
    const [l_score, setL_score] = useState("");
    
    const [gameWon, setGameWon] = useState(false);

    const playerSelect = players.map((player, index) => {
        return <option key={index} value={player._id}>{player.name}</option>
    })

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    

    const increase1 = () => {
        setCounter1(counter1 + 1);
    }

    const increase2 = () => {
        setCounter2(counter2 + 1);
    }

    useEffect(() => {

        setServeTracker(counter1 + counter2);

        if (counter1 >= 11 && counter1 -2 >= counter2) {
            setWinner(player1);
            setLoser(player2);
            setW_score(counter1);
            setL_score(counter2);
            setGameWon(true);
        } else if (counter2 >= 11 && counter2 -2 >= counter1) {
            setWinner(player2);
            setLoser(player1);
            setW_score(counter2);
            setL_score(counter1);
            setGameWon(true);
        } 

    }, [counter1, counter2])

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

    if (player1 === "" || player2 === "") {
        return(
            <div>
                <select defaultValue="" name="player1" onChange={(e)=>{setPlayer1(e.target.value)}}>
                    <option value=""></option>
                    {playerSelect}
                </select>
                <select defaultValue="" name="player2" onChange={(e)=>{setPlayer2(e.target.value)}}>
                    <option value="none"></option>
                    {playerSelect}
                </select>   
            </div>
        )
    } else {
        return(
            <div>
                {!gameWon ? (
                <div>
                    <button 
                        onClick={increase1} 
                        className={serve}>{counter1}</button>
                    <button 
                        onClick={increase2} 
                        className={serve === 'noserve' ? 'serve' : 'noserve'}>{counter2}</button>
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