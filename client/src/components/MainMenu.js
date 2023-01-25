import { Link } from "react-router-dom";

const MainMenu = () => {
    return(
        <div className="main-menu-container1">
            <ul>
                <li>
                    <Link 
                        className="main-menu-item-link"
                        to="/game-form">
                        START GAME
                    </Link>
                </li>
                <li>
                    <Link
                        className="main-menu-item-link"
                        to="/player-form">
                        CREATE NEW PLAYER
                    </Link>
                </li>
                <li>
                    <Link 
                        className="main-menu-item-link"
                        to="/game-history">
                        GAME HISTORY
                    </Link>
                </li>
                <li>
                    <Link   
                        className="main-menu-item-link"
                        to="/leaderboard">
                        LEADERBOARD
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MainMenu;