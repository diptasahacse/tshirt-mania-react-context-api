import React, { useContext } from 'react';
import { GiftContext, RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const gift = useContext(GiftContext);

    
    return (
        <div>
            <h3>Special</h3>
            <p>Gift From Dadu : {gift[0]}</p>
        </div>
    );
};

export default Special;