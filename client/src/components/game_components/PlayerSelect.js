const PlayerSelect = ({players, handlePlayerSelect}) => {

    const playerSelect = players.map((player, index) => {
        return <option key={index} value={player._id}>{player.name}</option>
    })

    return(
        <div>
            <select defaultValue="" name="player1" onChange={(e) => handlePlayerSelect(e)}>
                <option value=""></option>
                {playerSelect}
            </select>
            <select defaultValue="" name="player2" onChange={(e) => handlePlayerSelect(e)}>
                <option value="none"></option>
                {playerSelect}
            </select>   
        </div>
    )
}

export default PlayerSelect;