import React, { Component } from 'react';
import classes from './Person.css';
import { usingClass } from '../../../hoc/WithClass';
import AppAux from '../../../hoc/AppAux';

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
            <AppAux>
                <p onClick={this.props.click}>I am {this.props.name} ! I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} type="text" value={this.props.name} />
            </AppAux>
        );
    }
}


export default usingClass(Person, classes.Person);
