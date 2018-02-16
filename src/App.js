import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';
import styles from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Nikas", age: 22 },
      { id: 2, name: "Dziugas", age: 22 },
      { id: 3, name: "Mindaugas", age: 21 },
      { id: 4, name: "Eidmantas", age: 21 },
    ],
    headingText: "Hello world",
    showPersons: false,
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }
  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
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
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
            )
          })}
        </div>
      );
      btnClass = styles.Red;
    }
    const classes = [];
    if (this.state.persons.length <= 2) classes.push(styles.red);
    if (this.state.persons.length <= 1) classes.push(styles.bold);
    return (
      <div className={styles.App}>
        <h1>{this.state.headingText}</h1>
        <p className={classes.join(' ')}>This is really working.</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m react app!!!'));
  }
}

export default App;
