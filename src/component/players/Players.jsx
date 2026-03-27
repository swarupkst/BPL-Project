import React, { use } from 'react'
import AvailablePlayers from "../availablePlayers/AvailablePlayers";

export default function Players({playersPromise}) {
    console.log (playersPromise)
    const players = use(playersPromise);
    console.log (players)
  return (
    
    <div>
      <h1>Player : {players.length}</h1>
      <AvailablePlayers players={players}/>
    </div>
  )
}
