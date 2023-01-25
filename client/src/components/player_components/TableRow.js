const TableRow = ({index, player}) => {

    

    const win_percent = (player.win_percentage*100).toFixed(2);

    return(
        <tr>
            <td>{index+1}</td>
            <td>{player.name}</td>
            <td>{player.wins}</td>
            <td>{player.losses}</td>
            <td>{player.total_games}</td>
            <td>{win_percent}%</td>
            <td>{player.weighted_score}</td>
        </tr>
    )
}

export default TableRow;