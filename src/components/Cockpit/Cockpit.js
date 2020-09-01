import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>HELLO</h1>
            <button onClick={props.toggled}>Click Here</button>
        </div>
    );
}

export default cockpit;
