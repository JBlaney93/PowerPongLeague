import { Link } from "react-router-dom";
import GameItem from "../game_components/GameItem"
import React from "react";


const GameHistory = ({ gameHistory }) => {


   // console.log(gameHistory);
  
   const gameList = gameHistory.slice(0).reverse().map((game, index) => {
       return <GameItem
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
               <Link className ="back-to-menu" to="/">BACK TO MAIN MENU</Link>
           </div>
   )
}


export default GameHistory;
