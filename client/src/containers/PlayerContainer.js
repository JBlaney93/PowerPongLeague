import PlayerForm from "../components/PlayerForm";

const PlayerContainer = (players, addToPlayers) => {

    return(
        <>
            <PlayerForm addToPlayers={addToPlayers}/>
            {/* <PlayerList players ={players}/> */}
        </>
    )
}

export default PlayerContainer;