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
        player1: false,
        player2: false,
    })


    const handlePlayerSelect = (event) => {
        const player = event.target.name
        const temp = { ...gamePlayers }


        PlayerService.findPlayer(event.target.value)
            .then(obj => temp[player] = obj)
            .then(() => setGamePlayers(temp))
    }


    const handleWin = (player, w_score, l_score) => {
        if (player === "player1") {
            const endGame = {
                datetime: new Date(),
                winner_id: gamePlayers.player1._id,
                loser_id: gamePlayers.player2._id,
                w_score: w_score,
                l_score: l_score
            }
            setEndGame(endGame);
            setGameWon(true);
        } else if (player === 'player2') {
            const endGame = {
                datetime: new Date(),
                winner_id: gamePlayers.player2._id,
                loser_id: gamePlayers.player1._id,
                w_score: w_score,
                l_score: l_score
            }
            setEndGame(endGame);
            setGameWon(true);
        }
    }


    useEffect(() => {
        if (gamePlayers.player1 && gamePlayers.player2) {
            setPlayersSelected(true)
        }
    }, [gamePlayers])


    const handleSaveGame = () => {
        if (!gameWon) {
            return;
        }
        addToGameHistory(endGame);
    }


    const handleConfirm = () => {
        if (!playersSelected) {
            return;
        }
        setPlayersConfirmed(true);
    }


    return (
        <div>
            {!playersConfirmed ?
                <div className="player-select">
                    <fieldset className="player-select-form">
                        <legend className="select-to-proceed">SELECT TWO PLAYERS TO PROCEED:</legend>
                        <PlayerSelect players={players} handlePlayerSelect={handlePlayerSelect} gamePlayers={gamePlayers} />
                        <button className={playersSelected ? "confirm-button" : "inactive-confirm-button"} onClick={handleConfirm}>CONFIRM</button>
                    </fieldset>
                </div>
                : null}


            {playersConfirmed && !gameWon ?
                <div className="counters">
                    <Counters handleWin={handleWin} player1={gamePlayers.player1.name} player2={gamePlayers.player2.name} />
                </div>
                : null}


            {gameWon ?
                <WinScreen handleSaveGame={handleSaveGame} endGame={endGame} />
                : null}



            <div className="back-to-link-container">
                <Link
                    className="back-to-menu"
                    to="/">
                    BACK TO MAIN MENU</Link>
                <Link
                    className="back-to-menu"
                    to="/game-history">
                    RECENT GAMES</Link>
            </div>

            {gameWon ?
                <Link className="back-to-menu" to="/game-form">PLAY AGAIN</Link>
                : null}
        </div>
    )
}


export default GameForm;