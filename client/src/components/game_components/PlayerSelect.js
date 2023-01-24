import { useEffect } from "react"

const PlayerSelect = ({players, handlePlayerSelect}) => {

    useEffect(()=>{},[])

    const playerSelect = players.map((player, index) => {
        return <option key={index} value={player._id}>{player.name}</option>
    })

    return(
        <div>
            <select defaultValue="" name="player1" 
            onChange={(event)=>{handlePlayerSelect(event)}}>
                <option value=""></option>
                {playerSelect}
            </select>
            <select defaultValue="" name="player2" 
            onChange={(event)=>{handlePlayerSelect(event)}}>
                <option value="none"></option>
                {playerSelect}
            </select>   
        </div>
    )
}

export default PlayerSelect;