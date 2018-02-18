import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClassWrapper';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside constructor()", props);
  }
  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) this.inputElement.focus();
  }
  render() {
    console.log("[Person.js] Inside render()");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I'm {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          ref={(input) => { this.inputElement = input }}
          type="text"
          value={this.props.name}
          onChange={this.props.changed} />
      </Aux>
    );
  }
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);