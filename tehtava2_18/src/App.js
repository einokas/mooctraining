import React, { Component } from 'react';
import './App.css';
import personService from './services/persons'
import Notification from './services/Notification'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      change:''
    }
    console.log('constructor')
  }
    addPerson = (event) => {
        let helpb = -1
        event.preventDefault()
        const personObject = {
               name: this.state.newName,
               number: this.state.newNumber
        }
        console.log(personObject.name)
        for (let person of this.state.persons) {
            console.log(person.name)
            if (person.name === personObject.name) {
                helpb = person.id
            }
        }
        //new customer
        if(helpb === -1){
          const person = this.state.persons.concat(personObject)
              this.setState({
                persons: person,
                change: `henkilö '${personObject.name}' on lisätty luetteloon`
              })
          personService
            .create(personObject)
            .then(response => {
              console.log(response)
            })
        }
        //update excisting customer
        else{
          let confirm = window.confirm(personObject.name+ ' on jo luettelossa, päivitetäänkö numero')
            if(confirm === true){
              personService
                .update(helpb, personObject)
                .then(response => {
                  console.log("opdated", response)
                })
              this.setState({
                change: `henkilö '${personObject.name}' on päivitetty luetteloon`
              })
            }
            else{
              console.log("not updated")
            }
        }

        this.setState({
            newName: "",
            newNumber: "" }
        )
          setTimeout(() => {
            window.open(' ','_self')
            this.setState({change: null})
          }, 5000)
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
      personService
        .getAll()
        .then(response => {
          console.log('promise fulfilled')
          this.setState({ persons: response.data })
      })
    }
    
      removal = (id, name) => {
        let confirm = window.confirm('poistetaanko henkilö '+ name)
        if(confirm === true){
          personService
         .remove(id)
         .then(response => {
            console.log("deleted", response)
          })
          this.setState({
            change: `henkilö '${name}' on poistettu luettelosta`
          })
          setTimeout(() => {
            window.open(' ','_self')  
            this.setState({change: null})
          }, 5000)
        }
        else{
          console.log("not deleted")
        } 
        // 
      }
    
  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.change}/>
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
            {this.state.persons.map(person => ( person.name.toUpperCase().includes(this.state.filter.toUpperCase())? <tr key = {person.name} ><td>{person.name}</td><td>{person.number}</td><td><button onClick ={() => this.removal(person.id, person.name)}>poista</button></td></tr> :""))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;