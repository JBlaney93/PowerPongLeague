const PlayerSelect = ({players, setPlayer1, setPlayer2}) => {

    const playerSelect = players.map((player, index) => {
        return <option key={index} value={player._id}>{player.name}</option>
    })

    return(
        <div>
            <select defaultValue="" name="player1" onChange={(e)=>{setPlayer1(e.target.value)}}>
                <option value=""></option>
                {playerSelect}
            </select>
            <select defaultValue="" name="player2" onChange={(e)=>{setPlayer2(e.target.value)}}>
                <option value="none"></option>
                {playerSelect}
            </select>   
        </div>
    )
}

export default PlayerSelect;