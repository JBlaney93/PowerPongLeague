const PlayerSelect = ({players, setPlayer1, setPlayer2}) => {

    const playerSelect = players.map((player, index) => {
        return <option key={index} value={player._id}>{player.name}</option>
    })

    return(
        <div>
            <fieldset className="player-select-form">
                <legend className="select-to-proceed">SELECT TWO PLAYERS TO PROCEED:</legend>
                 <br />
                 <select defaultValue="" name="player1" onChange={(e)=>{setPlayer1(e.target.value)}}>
                    <option className="player-labels" value="" disabled selected hidden>PLAYER 1</option>
                    {playerSelect}
                </select>
                <br />
                <select defaultValue="" name="player2" onChange={(e)=>{setPlayer2(e.target.value)}}>
                    <option className="player-labels" value="" disabled selected hidden>PLAYER 2</option>
                    {playerSelect}
                </select>   
            </fieldset>
        </div>
    )
}

export default PlayerSelect;