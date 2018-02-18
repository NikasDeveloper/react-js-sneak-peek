import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Cockpit.css';

const cockpit = (props) => {
  const classes = [];
  let btnClass = styles.Button;
  if (props.persons.length <= 2) classes.push(styles.red);
  if (props.persons.length <= 1) classes.push(styles.bold);
  if (props.showPersons) btnClass = [styles.Button, styles.Red].join(' ');
  return (
    <Aux>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working.</p>
      <button className={btnClass} onClick={props.clicked}>Toggle persons</button>
    </Aux>
  );
}

export default cockpit;