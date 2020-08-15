import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [personsState, setPersonsState] = useState({
        person: [
            {name: 'shivani', age: 28},
            {name: 'anu', age: 16},
            {name: 'koko', age: 28}
        ]
    });

    const changeNameHandle = () => {
        setPersonsState({
            person: [
                {name: 'panu', age: 28},
                {name: 'anu', age: 16},
                {name: 'koko', age: 28}
            ]
        });
    };

    return (
        <div className="App">
            <h1>HELLO</h1>
            <button onClick={changeNameHandle}>Click Here</button>
            <Person name={personsState.person[0].name} age={personsState.person[0].age} />
            <Person name={personsState.person[1].name} age={personsState.person[1].name}>
                Nested Function
            </Person>
        </div>
    );

}

export default App;
