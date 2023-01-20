import GameForm from "../components/GameForm";
import GameHistory from "../components/GameHistory";
import PlayerForm from "../components/PlayerForm";

const MainContainer = () => {
    return(
        <div>
            <p>Hello from MainContainer.js</p>
            <GameForm />
            <PlayerForm />
            <GameHistory />
        </div>
    )
}

export default MainContainer;