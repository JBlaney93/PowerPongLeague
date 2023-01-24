const TableRow = ({index, player}) => {

    console.log(index);

    return(
        <tr>
            <td>{index+1}</td>
            <td>{player.name}</td>
            <td>{player.wins}</td>
            <td>{player.losses}</td>
            <td>{player.total_games}</td>
            <td>{player.win_percentage}</td>
            <td>{player.weighted_score}</td>
        </tr>
    )
}

export default TableRow;