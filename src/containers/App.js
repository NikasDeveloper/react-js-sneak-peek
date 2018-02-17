import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import styles from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Nikas", age: 22 },
      { id: 2, name: "Dziugas", age: 22 },
      { id: 3, name: "Mindaugas", age: 21 },
      { id: 4, name: "Eidmantas", age: 21 },
    ],
    showPersons: false,
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }
  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }
  togglePersonsHandler = () => {
    const isShown = this.state.showPersons;
    this.setState({ showPersons: !isShown });
  }
  render() {
    let persons = null;
    if (this.state.showPersons) persons = (
      <div>
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      </div>
    );
    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
