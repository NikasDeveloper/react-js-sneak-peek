import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClassWrapper';
import styles from './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor()", props);
  }
  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE App.js] Inside shouldComponentUpdate()", nextProps, nextState);
  //   return nextState.persons !== this.state.persons
  //     || nextState.showPersons !== this.state.showPersons;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] Inside componentWillUpdate()", nextProps, nextState);
  }
  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate()");
  }
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
    console.log("[App.js] Inside render()");
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
      <Aux>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show persons</button>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, styles.App);
