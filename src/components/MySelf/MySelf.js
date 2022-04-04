import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    return (
        <div>
            <p>House : {house}</p>
            <h3>Me</h3>
            <Special></Special>
        </div>
    );
};

export default MySelf;