import FooterNavBar from "../components/FooterNavBar";
import PlayerForm from "../components/player_components/PlayerForm"
import PlayerList from "../components/player_components/PlayerList";

const PlayerContainer = ({players, addToPlayers}) => {

    return(
        <div className="players-screen">
            <PlayerForm addToPlayers={addToPlayers}/>
            <PlayerList players = {players}/>
            <FooterNavBar/>
        </div>
    )
}

export default PlayerContainer;