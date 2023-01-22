// dependencies

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// components

import GameForm from "../components/GameForm";
import GameHistory from "../components/GameHistory";
import MainMenu from "../components/MainMenu";
import PlayerContainer from "./PlayerContainer";

// services

import PlayerService from "../services/PlayerService";
import GameService from "../services/GameService";


const MainContainer = () => {


    const [gameHistory, setGameHistory] = useState([])
    const [players, setPlayers] = useState([])

    useEffect(()=>{

        Promise.all([PlayerService.getPlayers(), GameService.getGames()])
        .then((result) => {
            setPlayers(result[0]);
            setGameHistory(result[1]);
        })

    },[])

    const addToGameHistory = (game) => {

        const duplicate = [...gameHistory];
        GameService.addGame(game)
        .then(res => GameService.findGame(res.insertedId))
        .then(res => duplicate.push(res))
        .then(setGameHistory(duplicate))
               
    }

    const addToPlayers = (player) => {

        const duplicate = [...players]
        PlayerService.addPlayer(player)
        .then(res => PlayerService.findPlayer(res.insertedId))
        .then(res => duplicate.push(res))
        .then(setPlayers(duplicate));

    }

    return(
        <div className="container">
            <Router>
                    <Routes>
                        <Route path="/" element={ <MainMenu />} />
                        <Route path="/game-form" 
                            element={ <GameForm addToGameHistory={addToGameHistory} players={players} />} />
                        <Route path="/player-form" 
                            element={ <PlayerContainer players = {players} addToPlayers={addToPlayers}/>} />
                        <Route path="/game-history" 
                            element={ <GameHistory gameHistory={gameHistory}/>} />
                    </Routes>
            </Router>
        </div>
    )
}

export default MainContainer;