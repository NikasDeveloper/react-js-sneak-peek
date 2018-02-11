import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Nikas", age: 22 },
      { name: "Dziugas", age: 22 },
      { name: "Mindaugas", age: 21 },
      { name: "Eidmantas", age: 21 },
    ],
    headingText: "Hello world"
  }
  switchNameHandler = (newName) => {
    // DONT DO THIS!!! this.state.persons[0].name = "Nikolajus";
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Dziugas", age: 22 },
        { name: "Mindaugas", age: 100 },
        { name: "Eidmantas", age: 21 },
      ],
      headingText: "Bye bye world"
    });
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Nikas", age: 22 },
        { name: "Dziugas", age: 22 },
        { name: "Mindaugas", age: 21 },
        { name: event.target.value, age: 21 },
      ],
    });
  }
  render() {
    const buttonStyles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>{this.state.headingText}</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Nikas')} style={buttonStyles}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => this.switchNameHandler('Swaggy Nikas')} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Nikita')} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>
          My hoby is racing.
        </Person>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
          changed={this.nameChangedHandler} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m react app!!!'));
  }
}

export default App;
