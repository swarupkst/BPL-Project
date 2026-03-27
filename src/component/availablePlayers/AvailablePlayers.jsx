import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const AvailablePlayer = ({players}) => {
    console.log(players, "Players")
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm border-2 p-1 border-gray-600">
  <figure>
    <img className='rounded-[5px] w-[330px] mt-4'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkFywF7oMHkeuFhRdg25KpkRaRhCkswm1Tw&s"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser />
    Virat Kohli</h2>
    <div className='flex justify-between'>
        <div className='flex gap-2'>
        <FaFlag className='text-gray-400' />
        <p className='text-gray-400'>Country</p>
        </div>

        <button className='bg-gray-700 p-1 rounded-[6px] text-black'>All-Rounder</button>

    </div>
    <hr className='text-gray-500 ' />
    <div className=''>
        <p className='font-bold py-2'>Rating <span>data from API</span></p>
        <div className='flex justify-between py-2'>
            <p className='font-bold'>Left-Hand_bat</p>
            <p className='text-gray-400 text-right'>Left-Hand-Bat</p>
        </div>
        <div className='flex justify-between'>
            <p className='font-bold'>Price: <span>$1500000</span></p>
            <button className='py-1 px-3 rounded-[5px] border border-solid border-white'>Choose Player</button>
        </div>

    </div>
    
  </div>
</div>
<div>
    <br />
</div>
        </div>
    );
};

export default AvailablePlayer;