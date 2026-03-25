import React, { use } from 'react'

export default function Players({playersPromise}) {
    console.log (playersPromise)
    const data = use(playersPromise);
    console.log (data)
  return (
    
    <div>
      <h1>Player : {data.length}</h1>
    </div>
  )
}
