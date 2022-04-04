import React, { createContext } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './GrandPa.css'


export const GiftContext = createContext('ring');

const GrandPa = () => {
    const house = 7;
    const gift = ["Diamond Ring", "Gold Ring"]
    return (
        <GiftContext.Provider value={gift}>
            <div className=' m-4 p-3 border'>
                <h3>Grandpa</h3>
                <p>I Have {house} House.</p>
                <div className='d-flex  grandpa'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </GiftContext.Provider>




    );
};

export default GrandPa;