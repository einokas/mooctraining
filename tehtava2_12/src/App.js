import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

let summa = 250;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countrys: [],
      filter: ''
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

  render() {
    return (
      <div>
        <h2>Countries</h2>
        <form>
        <div>
        Find countries: <input 
        value = {this.state.filter}
        onChange = {this.updateFilter}
        />
        </div>
        </form>
        <p>
        {<Match countrys={this.state.countrys} filter={this.state.filter} />}
        </p>
        <table><tbody>
        {(summa <11)? this.state.countrys.map(country => (country.name.toUpperCase().includes(this.state.filter.toUpperCase())? <Display key={country.name} country={country} /> :"" ) ): null}
        {(summa >10)? "too many matches, specify more letters":null}
        </tbody>
        </table>
      </div>
    );
  }
}
const Display = ({ country }) => {
    return (<tr><td>{country.name}</td></tr>)
  }

const Match = ({filter, countrys}) =>
{
  summa = 0
  countrys.map(country => (country.name.toUpperCase().includes(filter.toUpperCase())? summa = summa + 1:null))
  console.log(summa)
    return(summa)
}

export default App;