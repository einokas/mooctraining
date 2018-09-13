import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }
  
    //add person to phonebook
    addPerson = (event) => {
        event.preventDefault()
        const personObject = {
               name: this.state.newName
          }
        const person = this.state.persons.concat(personObject)
        this.setState({
            persons: person,
            newName: "" })
    }
    handlePersonChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
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
            </div>
            <div>
            <button type="submit">lisää</button> 
            </div>
            </form>
        <h2>Numerot</h2>
         {this.state.persons.map(person => <Display key={person.name} person={person} />)}
      </div>
    )
  }
}
const Display = ({ person }) => {
    return (
      <div>{person.name}</div>
    )
  }

export default App
ReactDOM.render(<App />, document.getElementById('root'));