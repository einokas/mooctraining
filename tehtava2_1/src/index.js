import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    }

    const Kurssi = () => {
        const head = (kurssi) => <h1> {kurssi.nimi} </h1>; console.log("head")
        const body = (kurssi) => <div> {kurssi.osat.map( osa => <p key={osa.id}> {osa.nimi} {osa.tehtavia} </p> )} </div> ; console.log("body")

        return(
            <div>
            {head(kurssi)}
            {body(kurssi)}
            </div>
        )
    }

    return (
      <div>
        {console.log("main")}
        <Kurssi kurssi={kurssi} />
      </div>
    )
}


  ReactDOM.render(<App />, document.getElementById('root'))