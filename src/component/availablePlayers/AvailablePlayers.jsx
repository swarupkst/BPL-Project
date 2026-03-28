import React from 'react';
import Card from '../card/Card';


const AvailablePlayer = ({players}) => {
    console.log(players, "Players")
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
            {
                players.map((player) => {
                    console.log(players,'players');
                    return( 
                    <Card player= {player}/>
                    );
                })
            }
            
<div>
    <br />
</div>
        </div>
        </div>
    );
};

export default AvailablePlayer;