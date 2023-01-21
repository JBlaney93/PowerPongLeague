import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameForm from "../components/GameForm";
import GameHistory from "../components/GameHistory";
import PlayerForm from "../components/PlayerForm";
import MainMenu from "../components/MainMenu";
import PlayerService from "../services/PlayerService";
import { useEffect, useState } from "react";

const MainContainer = () => {

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        PlayerService.getPlayers()
            .then(players => setPlayers(players))
    },[])

    console.log(players);

    return(
        <div className="container">
            <Router>
                    <Routes>
                        <Route path="/" element={ <MainMenu />} />
                        <Route path="/game-form" element={ <GameForm />} />
                        <Route path="/player-form" element={ <PlayerForm />} />
                        <Route path="/game-history" element={ <GameHistory />} />
                    </Routes>
            </Router>
        </div>
    )
}

export default MainContainer;