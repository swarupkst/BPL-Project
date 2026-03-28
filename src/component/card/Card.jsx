import React from 'react'
import { FaUser, FaFlag } from "react-icons/fa";

const Card = ({player}) => {
  return (
    <div className="card bg-base-100 shadow-sm border-2 p-1 border-gray-600">
  <figure>
    <img className='rounded-[5px] w-[430px] h-[300px] mt-4'
      src={player.image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser />
    {player.player_name}</h2>
    <div className='flex justify-between'>
        <div className='flex gap-2'>
        <FaFlag className='text-gray-400' />
        <p className='text-gray-400'>{player.player_country}</p>
        </div>

        <button className='bg-gray-700 p-1 rounded-[6px] text-white'>{player.player_type}</button>

    </div>
    <hr className='text-gray-500 ' />
    <div className=''>
        <p className='font-bold py-2'>Rating <span>{player.rating}</span></p>
        <div className='flex justify-between py-2'>
            <p className='font-bold'>{player.batting_style}</p>
            <p className='text-gray-400 text-right'>{player.bowling_style}</p>
        </div>
        <div className='flex justify-between'>
            <p className='font-bold'>Price: <span>${player.price}</span></p>
            <button className='py-1 px-3 rounded-[5px] border border-solid border-white'>Choose Player</button>
        </div>

    </div>
    
  </div>
</div>
  )
}

export default Card
