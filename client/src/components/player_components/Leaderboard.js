import { Link } from "react-router-dom";
import TableRow from "./TableRow";

const Leaderboard = ({leaderboard}) => {

    // const [sortMethod, setSortMethod] = useState()

    // const leaderboardByWins = leaderboard.sort((a,b)=>{
    //     return a.wins < b.wins? 1: -1
    // });

    const leaderboardByWeightedScore = leaderboard.sort((a,b)=>{
        return a.weighted_score < b.weighted_score? 1: -1
    });

    const table = leaderboardByWeightedScore.map((player, index)=>{
        return <TableRow key={player._id} index={index} player={player}/>
    })


    return(
    <div>
        <table>
            <tbody>
                <tr>
                    <td>position</td>
                    <td>name</td>
                    <td>wins</td>
                    <td>losses</td>
                    <td>total_games</td>
                    <td>win_percentage</td>
                    <td>weighted_score</td>
                </tr>
            {table}
            </tbody>
        </table>
        <Link className="back-to-menu" to="/">BACK TO MENU</Link>
    </div>
    )
}

export default Leaderboard;