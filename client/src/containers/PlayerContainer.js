import PlayerForm from "../components/PlayerForm"
import PlayerList from "../components/PlayerList";

const PlayerContainer = ({players, addToPlayers}) => {

    return(
        <>
            <PlayerList players = {players}/>
            <PlayerForm addToPlayers={addToPlayers}/>
        </>
    )
}

export default PlayerContainer;