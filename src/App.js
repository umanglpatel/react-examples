import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [{ name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 }],
    showPersons: false
  }

  switchNameHandler = (newName, newAge) => {
    // console.log('Switch name called');
    this.setState({
      persons: [
        { name: newName, age: newAge },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show })
  }

  renderPerson = () => {
    return (
      <div>
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('function as arg', 10)}
          changed={this.nameChangedHandler} > Hobbies: Racing </Person>
        < Person name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = this.renderPerson();
    }

    return (
      <div className="App" >
        <h1> Hi!I am react app </h1>
        <p> this is really working! </p>
        <button style={style} onClick={this.togglePersonsHandler} > Toggle Persons </button>
        {/* {this.state.showPersons ? this.renderPerson() : null} */}
        {persons}
      </div>
    );
  }

}


export default App;
