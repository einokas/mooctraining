import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0,
      }
    }
  
    klikHyva = () => {
      this.setState({
        hyva: this.state.hyva + 1
      })
    }
  
    klikNeutraali = () => {
      this.setState({
        neutraali: this.state.neutraali + 1
      })
    }
    klikHuono = () => {
        this.setState({
          huono: this.state.huono + 1
        })
      }
  
    render() {
        let pos = this.state.hyva/(this.state.neutraali + this.state.hyva + this.state.huono)*100
        pos = +pos.toFixed(1)
        let ka = (this.state.huono*-1 + this.state.hyva)/(this.state.hyva + this.state.huono + this.state.neutraali)
        ka = +ka.toFixed(1)
      return (
        <div>
          <div>
              <h1>Anna palautetta unikahvilalle</h1>
          </div>
          <div>
            <Button value = {this.klikHyva} name="Hyvä" />
            <Button value = {this.klikNeutraali} name="Neutraali" />
            <Button value = {this.klikHuono} name="Huono" />
          </div>
            <div>
              <h2>Statistiikka</h2>
            </div>
            <div>
            <Statistics positiivinen= {this.state.hyva}/>
                Hyvä: {this.state.hyva}
            </div>
            <div>
                Neutraali: {this.state.neutraali}
            </div>
            <div>
                Huono: {this.state.huono}
            </div>
            <div>
                Keskiarvo: {ka}
            </div>
            <div>
                Positiivisia: {pos} %
            </div>
        </div>
      )
    }
  }

const Button = (props) =>
{
    return (
        <button onClick={props.value}>{props.name}</button>
    )
    }

const Information = [

    { text: "Hyvä: "},
    { text: "Neutraali: "},
    { text: "Huono: "},
    { text: "Keskiarvo: "},
    { text: "Positiivisia: "}
]

const Statistics = (props) =>

    <div>
        <Statistic text = "Hyvä: " value= {props.positiivinen}/>
    </div>

const Statistic = (props) =>
{
    return(
    <div>
        {props.text} {props.value} {props.secondarytext}
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
