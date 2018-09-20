import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
    console.log('constructor')
  }
    addPerson = (event) => {
        let helpb = true
        event.preventDefault()
        const personObject = {
               name: this.state.newName,
               number: this.state.newNumber
        }
        console.log(personObject.name)
        for (let person of this.state.persons) {
            console.log(person.name)
            if (person.name === personObject.name) {
                helpb = false
            }
        }
        if(helpb){
        const person = this.state.persons.concat(personObject)
                this.setState({
                    persons: person
                })
        }
        this.setState({
            newName: "",
            newNumber: "" }
        )
        axios.post('http://localhost:3001/persons', personObject)
        .then(response => {
        console.log(response)
        })
    }
    handlePersonChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
      }
    handleNumberChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNumber: event.target.value })
      }
    updateFilter = (event) => {
        console.log(event.target.value)
        this.setState({ filter: event.target.value })
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
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
            <div>
                rajaa näytettäviä: <input 
                value = {this.state.filter}
                onChange= {this.updateFilter}
                />
            </div>
                <h2>Lisää uusi</h2>
            <div>
                nimi: <input 
                value={this.state.newName}
                onChange={this.handlePersonChange}  
                />
            </div>
            <div>
                numero: <input 
                value={this.state.newNumber}
                onChange={this.handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
        </form>
        <h2>Numerot</h2>
        <table>
          <tbody>
            {this.state.persons.map(person => (person.name.toUpperCase().includes(this.state.filter.toUpperCase())? <Display key={person.name} person={person} /> :"" ) )}
          </tbody>
        </table>
      </div>
    )
  }
}

const Display = ({ person }) => {
    return (
      <tr><td>{person.name}</td><td>{person.number}</td></tr>
    )
  }

  export default App;
