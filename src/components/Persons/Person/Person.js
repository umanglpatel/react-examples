import React, { Component } from 'react';
import classes from './Person.css';
import { usingClass } from '../../../hoc/WithClass';
import AppAux from '../../../hoc/AppAux';
import PropTypes from 'prop-types';

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
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {

        console.log('[Person.js] Inside componentDidMount()');

        return (
            <AppAux>
                <p onClick={this.props.click}>I am {this.props.name} ! I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => { this.inputElement = inp }}
                    onChange={this.props.changed}
                    type="text"
                    value={this.props.name} />
            </AppAux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default usingClass(Person, classes.Person);
