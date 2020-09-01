import React from 'react';

import './Person.css'

const person = (props) => {
    return(
        <div className='Person'>
            <p>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={props.change} />
        </div>
    );
}

export default person;
