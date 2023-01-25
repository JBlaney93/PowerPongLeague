const PlayerItem = ({ player, index }) => {
    return(
        <li className="player-list-item">
            {player.name}
        </li>
    )
}

export default PlayerItem;