import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
      ]
    }
    return (
      <div>
        <Otsikko kurssi={kurssi.nimi} />
        <Sisalto osa1 = {kurssi.osat[0].nimi} osa2 = {kurssi.osat[1].nimi} osa3 = {kurssi.osat[2].nimi} tehtavia1 ={kurssi.osat[0].tehtavia} tehtavia2 = {kurssi.osat[1].tehtavia} tehtavia3 = {kurssi.osat[2].tehtavia} />
        <Yhteensa tehtavia1 ={kurssi.osat[0].tehtavia} tehtavia2 = {kurssi.osat[1].tehtavia} tehtavia3 = {kurssi.osat[2].tehtavia} />
      </div>
    )
  }

const Otsikko = (props) => {
    return (
        <div>
          <h1>{props.kurssi}</h1>
        </div>
    )
}

const Osa = (props) => {

    return(
        <p>{props.osa} {props.tehtavia}</p>
    )
}

const Sisalto = (props) => {
    return (
        <div>
        <Osa osa = {props.osa1} tehtavia = {props.tehtavia1} />
        <Osa osa = {props.osa2} tehtavia = {props.tehtavia2} />
        <Osa osa = {props.osa3} tehtavia = {props.tehtavia3} />
        </div>
      )
    
}

const Yhteensa = (props) => {
    return (
        <div>
          <p>yhteensä {props.tehtavia1 + props.tehtavia2 + props.tehtavia3} tehtävää</p>
        </div>
      )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)