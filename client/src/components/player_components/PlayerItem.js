const PlayerItem = ({ player, index }) => {
    return(
        <div>
            <li>
                {player.name}
                {/* {player._id} */}
            </li>
        </div>
    )
}

export default PlayerItem;