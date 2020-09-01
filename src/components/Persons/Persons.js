import React from 'react';

import Person from '../Persons/Person/Person'

const persons = (props) => props.person.map(peer => {
        return <Person
        name={peer.name}
        age={peer.age}
        key={peer.id}
        change={(event) => props.changed(event, peer.id)}/>
    });

export default persons;
