import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

let summa = 0;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countrys: [],
      filter: '',
      match: 0
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ countrys: response.data })
      })
  }
  updateFilter = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }
  presenter() {
    summa = 0
    this.state.countrys.map(country => (country.name.toUpperCase().includes(this.state.filter.toUpperCase())? summa = summa + 1:null))
    console.log(summa)
    this.setState({match: summa})
  }


  render() {
    return (
      <div>
        <h2>Countries</h2>
        <form onSubmit = {this.addPerson}>
        <div>
        Find countries: <input 
        value = {this.state.filter}
        onChange = {this.updateFilter}
        />
        </div>
        </form>
        <p>
        </p>
        <table><tbody>
        {this.state.countrys.map(country => (country.name.toUpperCase().includes(this.state.filter.toUpperCase())? <Display key={country.name} country={country} /> :"" ) )}
       
        </tbody>
        </table>
      </div>
    );
  }
}
const Display = ({ country }) => {
    return (<tr><td>{country.name}</td></tr>)
  }

export default App;