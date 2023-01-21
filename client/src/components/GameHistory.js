import { Link } from "react-router-dom";
import GameHistoryItem from "./GameItem";
import React from "react";

const GameHistory = ({ gameHistory }) => {
    
    console.log(gameHistory);
    
    const gameList = gameHistory.map((game, index) => {
        return <GameHistoryItem
                    game={game}
                    key={index}
                />
    })

    return(
            <div>
                <p>GAME HISTORY HERE</p>
                <ul>
                    {gameList}
                </ul>
                <Link to="/">Home</Link>
            </div>
    )
}

export default GameHistory;