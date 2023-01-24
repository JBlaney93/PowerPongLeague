import { useEffect } from "react";

const PlayerSelect = ({ players, handlePlayerSelect }) => {


   useEffect(() => { }, [])


   const playerSelect = players.map((player, index) => {
       return <option key={index} value={player._id}>{player.name}</option>
   })


   return (
       <div className="character-dropdowns">
           <select className="select" defaultValue="" name="player1"
               onChange={(event) => { handlePlayerSelect(event) }}>
               <option value="">PLAYER 1</option>
               {playerSelect}
           </select>
           <select className="select" defaultValue="" name="player2"
               onChange={(event) => { handlePlayerSelect(event) }}>
               <option value="none">PLAYER 2</option>
               {playerSelect}
           </select>
       </div>
   )
}


export default PlayerSelect;