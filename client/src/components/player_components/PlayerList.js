import React from 'react';

const PlayerList = ({players}) => {

    const playerList = players.map((player, index)=>{
        return <li key={index}>{player.name}</li>
    })

  return (
    <fieldset className='new-player-profile-form'>
      <legend className="new-player-profile-heading">Players</legend>
      <ul>
        {playerList}
      </ul>
    </fieldset>
  );
};

export default PlayerList;