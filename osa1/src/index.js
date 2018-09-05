import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 1
    }
    this.kasvataYhdella = this.kasvataYhdella.bind(this)
    this.nollaa = this.nollaa.bind(this)
  }

  kasvataYhdella() {
    this.setState({ counter: this.state.counter + 1 })
  }

  nollaa() {
    this.setState({ counter: 0 })
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <div>
          <button onClick={this.kasvataYhdella}>
            plus
          </button>
          <button onClick={this.nollaa}>
            zero
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
