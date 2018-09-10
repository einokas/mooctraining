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
 
    noValues = (state) =>{
        if(state.huono === 0 && state.hyva === 0 && state.neutraali === 0) {
            return "ei yhtään palautetta annettu" 
        }
        else
            {return state}
    }
 
    render() {
        const buttonoptions = [
            {value: this.klikHyva, updateParam: this.updateParam, name: "Hyvä"},
            {value: this.klikNeutraali, updateParam: this.updateParam, name: "Neutraali"},
            {value: this.klikHuono, updateParam: this.updateParam, name: "Huono"}
        ]

      return (
        <div>
            <h1>Anna palautetta luonaalle</h1>
                <div> {buttonoptions.map((button) => <Button value = {button.value} updateParam = {button.updateParam} name = {button.name} />)} </div>
            <h2>Statistiikka</h2>
            <table>
                <Statistics state = {this.noValues(this.state)} />
            </table>
        </div>
      )
    }
  }

const Button = (props) =>
{
    return (
            <button onClick={props.value}>{props.name}</button>
    )}

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
    if(props.state === "ei yhtään palautetta annettu"  ){
        return ( <tbody><tr>{props.state}</tr></tbody> )}
    else {
        return(
            <tbody>
                {informations.map((information) => <tr> <Statistic text = {information.text} value = {valueGeneration(props.state, information.value , information.text )} secondarytext = {information.secondarytext} /> </tr> )}
            </tbody>
        )
    }
}

const Statistic = (props) =>
{
    return(
        <tbody>
        <tr><td>{props.text}</td> <td> {props.value} {props.secondarytext} </td> </tr>
        </tbody>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
