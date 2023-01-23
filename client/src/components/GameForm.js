import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import PlayerSelect from "./PlayerSelect";
import PlayerService from "../services/PlayerService";

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

    const [gamePlayers, setGamePlayers] = useState({
        player1: "",
        player2: "",
        winner: ""
    })

    const [playersSelected, setPlayersSelected] = useState(false);
    const [playersConfirmed, setPlayersConfirmed] = useState(false);

    const handlePlayerSelect = (event) => {
        const player = event.target.name
        const temp = {...gamePlayers}
        
        PlayerService.findPlayer(event.target.value)
        .then(obj => temp[player] = obj)
        .then(setGamePlayers(temp))
    }

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
                winner: gamePlayers.player1._id,
                loser: gamePlayers.player2._id,
                w_score: counterObj.c1,
                l_score: counterObj.c2,
                gameWon: true
            };
            const temp = {...gamePlayers};
            temp.winner = "player 1";
            setGamePlayers(temp);
            setGameState(endGame);

            console.log(gameState)
            
        } else if (counterObj.c2 >= 11 && counterObj.c2 -2 >= counterObj.c1) {
            const endGame = {
                datetime: new Date(),
                winner: gamePlayers.player2._id,
                loser: gamePlayers.player1._id,
                w_score: counterObj.c1,
                l_score: counterObj.c2,
                gameWon: true
            };
            const temp = {...gamePlayers};
            temp.winner = "player 2";
            setGamePlayers(temp);
            setGameState(endGame);


        } 
        //  eslint-disable-next-line

    }, [counterObj, gamePlayers, gameState])

    useEffect(()=>{
        if (gamePlayers.player1 || gamePlayers.player2) {
            setPlayersSelected(true)
        }
    }, [gamePlayers])

    const handleWin = () => {
        addToGameHistory(gameState);
    }
    
    const handleConfirm = () => {
        setPlayersConfirmed(true);
    }

    if (playersConfirmed === false) {
        return(
            <>
            <PlayerSelect players = {players} handlePlayerSelect={handlePlayerSelect}/>
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
                        className={serve === 'noserve' ? 'serve' : 'noserve'}>{counterObj.c2}
                    </button>
                </div>
                ) : 
                (
                    
                <div>
                    <p>winner: {
                    gamePlayers.winner === "player 1"? gamePlayers.player1.name:gamePlayers.player2.name
                    } 
                    loser: {
                    gamePlayers.winner === "player 1"? gamePlayers.player2.name:gamePlayers.player1.name
                    }</p>
                    <p>scores: {
                    gamePlayers.winner === "player 1"?gameState.w_score:gameState.l_score
                    } - {
                    gamePlayers.winner === "player 1"?gameState.l_score:gameState.w_score
                    }</p>
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