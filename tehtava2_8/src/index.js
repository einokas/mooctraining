import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: '123123' }],
      newName: '',
      newNumber: ''
    }
  }

    //add person to phonebook
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
                newNumber: "" })
    }
    handlePersonChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
      }
      handleNumberChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNumber: event.target.value })
      }
    
  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
            <div>
            nimi: <input 
            value={this.state.newName}
            onChange={this.handlePersonChange}
            />
            <div>
            numero: <input 
             value={this.state.newNumber}
             onChange={this.handleNumberChange}
            />
            </div>
            </div>
            <div>
            <button type="submit">lisää</button> 
            </div>
            </form>
        <h2>Numerot</h2>
        <table>
          <tbody>
         {this.state.persons.map(person => <Display key={person.name} person={person} />)}
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

export default App
ReactDOM.render(<App />, document.getElementById('root'));