import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
    }
    console.log('constructor')
  }


  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }


  render() {
    return (
      <div>
        <h2>Numerot</h2>
        <table>
          <tbody>
        {this.state.persons.map(person => <Display key={person.id} person={person} />)}
          </tbody>
        </table>
      </div>
    );
  }
}
const Display = ({ person }) => {
    return (
      <tr><td>{person.name}</td><td>{person.number}</td></tr>
    )
  }

export default App;
