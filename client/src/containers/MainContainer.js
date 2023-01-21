import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import GameForm from "../components/GameForm";
import GameHistory from "../components/GameHistory";
import PlayerForm from "../components/PlayerForm";
import MainMenu from "../components/MainMenu";


const MainContainer = () => {

    const [gameHistory, setGameHistory] = useState([])
    
    useEffect(() => {
        console.log(gameHistory);
      }, [gameHistory]);
    

    const addToGameHistory = (game) => {
        const newList = [...gameHistory]
        newList.push(game)
        setGameHistory(newList)
    }

    return(
        <div className="container">
            <Router>
                    <Routes>
                        <Route path="/" element={ <MainMenu />} />
                        <Route path="/game-form" 
                            element={ <GameForm addToGameHistory={addToGameHistory} />} />
                        <Route path="/player-form" 
                            element={ <PlayerForm />} />
                        <Route path="/game-history" 
                            element={ <GameHistory gameHistory={gameHistory}/>} />
                    </Routes>
            </Router>
        </div>
    )
}

export default MainContainer;