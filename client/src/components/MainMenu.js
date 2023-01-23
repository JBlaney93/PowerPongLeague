import { Link } from "react-router-dom";

const MainMenu = () => {
    return(
        <div className="main-menu-container">
            <ul>
                <li className="main-menu-item">
                    <Link to="/game-form">
                        START GAME
                    </Link>
                </li>
                <li className="main-menu-item">
                    <Link to="/player-form">
                        CREATE NEW PLAYER
                    </Link>
                </li>
                <li className="main-menu-item">
                    <Link to="/game-history">
                        GAME HISTORY
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MainMenu;