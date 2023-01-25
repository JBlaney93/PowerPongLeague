import FooterNavBar from "../components/FooterNavBar";
import PlayerForm from "../components/player_components/PlayerForm"
import PlayerList from "../components/player_components/PlayerList";
import "./PlayerContainer.css";

const PlayerContainer = ({players, addToPlayers}) => {

    return(
        <div className="player-menu-container">
                <div className="players-screen">
                    <PlayerForm addToPlayers={addToPlayers}/>
                    <PlayerList players={players}/>
                </div>
                <FooterNavBar/>
        </div>
    )
}

export default PlayerContainer;