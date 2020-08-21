import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        person: [
            {name: 'shivani', age: 28},
            {name: 'anu', age: 16},
            {name: 'koko', age: 28}
        ],
        showPerson : false
    }

    changeNameHandle = () => {
        this.setState({
            person: [
                {name: 'panu', age: 28},
                {name: 'anu', age: 16},
                {name: 'koko', age: 28}
            ]
        });
    };

    changeClickHandle = (event) => {
        this.setState({
            person: [
                {name: 'panu', age: 28},
                {name: event.target.value, age: 16},
                {name: 'koko', age: 28}
            ]
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
                        age={peer.age}/>
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
