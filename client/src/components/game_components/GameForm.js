import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import PlayerSelect from "./PlayerSelect";
import PlayerService from "../../services/PlayerService";
import Counters from "./Counters";
import WinScreen from "./WinScreen";

const GameForm = ({ addToGameHistory, players }) => {

    // stages for displaying items

    const [playersSelected, setPlayersSelected] = useState(false);
    const [playersConfirmed, setPlayersConfirmed] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    
    const [endGame, setEndGame] = useState({})
    const [gamePlayers, setGamePlayers] = useState({
        player1: "",
        player2: "",
    })

    const handlePlayerSelect = (event) => {
        const player = event.target.name
        const temp = {...gamePlayers}
        
        PlayerService.findPlayer(event.target.value)
        .then(obj => temp[player] = obj)
        .then(setGamePlayers(temp))
    }

    useEffect(()=>{
        if (gamePlayers.player1 && gamePlayers.player2) {
            setPlayersSelected(true)
        }
    }, [gamePlayers])

    const handleWin = (player, w_score, l_score) => {
        if (player === "player 1") {
            const endGame = {
                datetime: new Date(),
                winner: gamePlayers.player1._id,
                loser: gamePlayers.player2._id,
                w_score: w_score,
                l_score: l_score
            }
            setEndGame(endGame);
            setGameWon(true);
        } else if (player === 'player 2') {
            const endGame = {
                datetime: new Date(),
                winner: gamePlayers.player2._id,
                loser: gamePlayers.player1._id,
                w_score: w_score,
                l_score: l_score
            }
            setEndGame(endGame);
            setGameWon(true);
        }
    }

    const handleSaveGame = () => {
        addToGameHistory(endGame);
    }
    
    const handleConfirm = () => {
        if (!playersSelected) {
            return;
        }
        setPlayersConfirmed(true);
    }

    return(
        <div>
            
            <div className="player-select">
                <p className="select-to-proceed">Select two players to proceed:</p>
                <PlayerSelect players={players} handlePlayerSelect={handlePlayerSelect} gamePlayers={gamePlayers}/>
            </div>
            <div className="counters">
                <Counters handleWin={handleWin}/>
            </div>
            <div className="win-screens">
                <WinScreen handleSaveGame={handleSaveGame}/>
            </div>
            <Link to="/">back to menu</Link>
            <Link to="/game-history">recent games</Link>
            <Link to="/game-form">play again</Link>
        </div>
    )
}

export default GameForm;