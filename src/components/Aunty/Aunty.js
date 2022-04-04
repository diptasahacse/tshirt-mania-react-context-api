import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = ({house}) => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h3>Aunty</h3>
            <p>House : {house}</p>
            <p>Gift from Baba : {gift}</p>
        </div>
    );
};

export default Aunty;