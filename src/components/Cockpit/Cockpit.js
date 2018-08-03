import React from 'react';
import classes from './Cockpit.css';
import AppAux from '../../hoc/AppAux';

const cockpit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    return (
        <AppAux>
            <h1> {props.appTitle} </h1>
            <p className={assignedClasses.join(' ')}> this is really working! </p>
            <button className={btnClass} onClick={props.clicked} > Toggle Persons </button>
        </AppAux>
    );
}

export default cockpit;
