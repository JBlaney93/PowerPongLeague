import { Link } from "react-router-dom";

const MainMenu = () => {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/game-form">
                        START GAME
                    </Link>
                </li>
                <li>
                    <Link to="/player-form">
                        ADD PLAYER
                    </Link>
                </li>
                <li>
                    <Link to="/game-history">
                        GAME HISTORY
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MainMenu;