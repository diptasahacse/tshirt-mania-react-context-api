import React from 'react';
import MySelf from '../MySelf/MySelf'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
import './Father.css'

const Father = ({house,gift}) => {
    return (
        <div className=' m-4 p-3 border'>
            <h3>Father</h3>
            <p>House = {house}</p>
            <div className='d-flex  father'>
                <MySelf house={house}></MySelf>
                <Brother  house={house}></Brother>
                <Sister  house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;