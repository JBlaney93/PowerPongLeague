import GameForm from "../components/GameForm";
import PlayerForm from "../components/PlayerForm";

const MainContainer = () => {
    return(
        <div>
            <p>Hello from MainContainer.js</p>
            <GameForm />
            <PlayerForm />
        </div>
    )
}

export default MainContainer;