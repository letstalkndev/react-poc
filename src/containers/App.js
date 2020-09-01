import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        person: [
            {id:1, name: 'shivani', age: 28},
            {id:2, name: 'anu', age: 16},
            {id:3, name: 'koko', age: 28}
        ],
        showPerson : false
    }

    changeNameHandle = (event, id) => {
        const personIndex = this.state.person.findIndex(p => {return p.id === id});
        const person = {
            ...this.state.person[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.person];
        persons[personIndex] = person;

        this.setState({
            person: persons
        });
    };

    toggleHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson : !doesShow})
    }

    render() {
        let persons = null;
        if(this.state.showPerson) {
            persons = (
                <div>
                    <Persons
                        person={this.state.person}
                        changed={this.changeNameHandle} />
                </div>
            )
        }

        return (
            <div className="App">
                <Cockpit toggled={this.toggleHandler} />
                {persons}
            </div>
        );
    }


}

export default App;
