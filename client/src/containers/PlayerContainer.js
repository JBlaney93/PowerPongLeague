import PlayerForm from "../components/PlayerForm"
// import PlayerList from "../components/PlayerList";

const PlayerContainer = ({players, addToPlayers}) => {

    return(
        <>
            <PlayerForm addToPlayers={addToPlayers}/>
            {/* <PlayerList players = {players}/> */}
        </>
    )
}

export default PlayerContainer;