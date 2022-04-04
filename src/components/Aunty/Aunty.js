import React, { useContext } from 'react';
import { GiftContext, RingContext } from '../GrandPa/GrandPa';

const Aunty = ({house}) => {
    const gift = useContext(GiftContext);

    
    return (
        <div>
            <h3>Aunty</h3>
            <p>House : {house}</p>
            <p>Gift from Baba : {gift[1]}</p>
        </div>
    );
};

export default Aunty;