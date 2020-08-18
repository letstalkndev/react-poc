import React from 'react';

const person = (props) => {
    return(
        <div>
            <p>I am {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={props.change} />
        </div>
    );
}

export default person;
