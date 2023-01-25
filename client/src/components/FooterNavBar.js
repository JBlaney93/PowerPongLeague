import { Link } from "react-router-dom";

const FooterNavBar = () => {
    return(
        <div className="back-to-link-container">
                <Link
                    className="back-to-menu"
                    to="/">
                    BACK TO MAIN MENU
                </Link>
                <Link
                    className="back-to-menu"
                    to="/game-history">
                    RECENT GAMES
                </Link>
                <Link
                    className="back-to-menu"
                    to="/leaderboard">
                    LEADERBOARD
                </Link>
        </div>
    )
}

export default FooterNavBar;