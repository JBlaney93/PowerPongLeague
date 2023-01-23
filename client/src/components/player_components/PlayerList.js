import React from 'react';

const PlayerList = ({players}) => {

    const playerList = players.map((player, index)=>{
        return <li key={index}>{player.name}</li>
    })

  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {playerList}
      </ul>
    </div>
  );
};

export default PlayerList;