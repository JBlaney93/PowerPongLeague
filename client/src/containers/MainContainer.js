import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameForm from "../components/GameForm";
import GameHistory from "../components/GameHistory";
import PlayerForm from "../components/PlayerForm";
import MainMenu from "../components/MainMenu";

const MainContainer = () => {
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