import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside constructor.', props);
        // state can be initialized here in constructor as well.
        // using it below constructor is recommended.
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    render() {

        console.log('[Persons.js] Inside render()');

        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                key={person.id} />
        });
    }
}

export default Persons;
