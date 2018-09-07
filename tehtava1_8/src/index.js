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
        hyva: this.state.hyva + 1,
      })
    }
  
    klikNeutraali = () => {
      this.setState({
        neutraali: this.state.neutraali + 1,
      })
    }
    klikHuono = () => {
        this.setState({
          huono: this.state.huono + 1,
        })
      }
  
    render() {

      return (
        <div>
          <div>
              <h1>Anna palautetta unikahvilalle</h1>
          </div>
          <div>
            <Button value = {this.klikHyva} updateParam = {this.updateParam} name="Hyvä" />
            <Button value = {this.klikNeutraali} updateParam = {this.updateParam} name="Neutraali" />
            <Button value = {this.klikHuono} updateParam = {this.updateParam} name="Huono" />
          </div>
            <div>
              <h2>Statistiikka</h2>
            </div>
            <div>
            <Statistics state = {this.state} />
            </div>
        </div>
      )
    }
  }

const Button = (props) =>
{
    return (
        <button onClick={props.value}>{props.name}</button>)
}

const Statistics = (props) => {
    const informations = [{text: "Hyvä: ", value: "hyva"},
    {text: "Neutraali: ", value: "neutraali"},
    {text: "Huono: ", value: "huono"},
    {text: "Keskiarvo: ", value: "ka"},
    {text: "Positiivisia: ", value: "pos", secondarytext: "%"}]
    
    const valueGeneration = (state, value, text, props) => {
        let parameter = " "
        if(text === "Keskiarvo: "){
            parameter = ((state.huono * -1 + state.hyva)/(state.hyva + state.neutraali + state.huono)).toFixed(1)}
        else if( text === "Positiivisia: "){
            parameter = (state.hyva/(state.hyva + state.neutraali + state.huono)*100).toFixed(1)}
        else {
            parameter = state[value]}
        return(parameter)
    }

    return(
        <div>
            {informations.map((information) =>  <Statistic text = {information.text} value = {valueGeneration(props.state, information.value , information.text )} secondarytext = {information.secondarytext} />)}
        </div>
    )
}

const Statistic = (props) =>
{
    return(
    <div> {props.text} {props.value} {props.secondarytext} </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
