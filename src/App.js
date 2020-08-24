import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
                    {this.state.person.map(peer => {
                        return <Person
                        name={peer.name}
                        age={peer.age}
                        key={peer.id}
                        change={(event) => this.changeNameHandle(event, peer.id)}/>
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <h1>HELLO</h1>
                <button onClick={this.toggleHandler}>Click Here</button>
                {
                    this.state.showPerson ?
                    persons : null
                }
            </div>
        );
    }


}

export default App;
