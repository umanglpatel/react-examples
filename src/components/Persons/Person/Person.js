import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor.', props);
        // state can be initialized here in constructor as well.
        // using it below constructor is recommended.
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    render() {

        console.log('[Person.js] Inside componentDidMount()');

        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name} ! I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} type="text" value={this.props.name} />
            </WithClass>
        );
    }
}


export default Person;
