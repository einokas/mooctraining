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
            <button onClick={this.klikHyva}>Hyvä</button>
            <button onClick={this.klikNeutraali}>Neutraali</button>
            <button onClick={this.klikHuono}>Huono</button>
          </div>
            <div>
              <h2>Statistiikka</h2>
            </div>
            <div>
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

ReactDOM.render(<App />, document.getElementById('root'))
