import React from 'react';
import './Person.css';

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} ! I am {props.age}</p>
            <p>{props.children}</p>
            <input onChange={props.changed} type="text" value={props.name} />
        </div>
    );
}

export default person;
