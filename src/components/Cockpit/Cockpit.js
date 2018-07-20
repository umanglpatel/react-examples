import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1> Hi!I am react app </h1>
            <p className={assignedClasses.join(' ')}> this is really working! </p>
            <button className={btnClass} onClick={props.clicked} > Toggle Persons </button>
        </div>
    );
}

export default cockpit;
