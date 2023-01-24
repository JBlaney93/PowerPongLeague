import PlayerForm from "../components/player_components/PlayerForm"
import PlayerList from "../components/player_components/PlayerList";

const PlayerContainer = ({players, addToPlayers}) => {

    return(
        <>
            <PlayerForm addToPlayers={addToPlayers}/>
            <PlayerList players = {players}/>
        </>
    )
}

export default PlayerContainer;