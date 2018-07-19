import React from 'react';
import classes from './Person.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I am {props.name} ! I am {props.age}</p>
            <p>{props.children}</p>
            <input onChange={props.changed} type="text" value={props.name} />
        </div>
    );
}

export default person;
