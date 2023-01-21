import { Link } from "react-router-dom";
import GameHistoryItem from "./GameItem";
import React from "react";

const GameHistory = ({ gameHistory }) => {
    
    const gameList = gameHistory.map((game, index) => {
        return <GameHistoryItem
                    game={game}
                    key={index}
                />
    })

    return(
            <div>
                <p>GAME HISTORY HERE</p>
                <p>
                    {gameList}
                </p>
                <Link to="/">Home</Link>
            </div>
    )
}

export default GameHistory;