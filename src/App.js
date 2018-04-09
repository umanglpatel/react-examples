import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => { return p.id === id; })

    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show })
  }

  deletePerson = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  renderPerson = () => {
    return (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
            name={person.name}
            age={person.age}
            click={() => this.deletePerson(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            key={person.id} />
        })}
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
