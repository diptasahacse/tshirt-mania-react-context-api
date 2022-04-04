import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h3>Special</h3>
            <p>Gift From Dadu : {gift}</p>
        </div>
    );
};

export default Special;