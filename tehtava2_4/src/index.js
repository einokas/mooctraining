import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const kurssit = [
        {
        nimi: 'Half Stack -sovelluskehitys',
        id: 1,
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
        },
        {
        nimi: 'Node.js',
        id: 2,
        osat: [
            {
            nimi: 'Routing',
            tehtavia: 3,
            id: 1
            },
            {
            nimi: 'Middlewaret',
            tehtavia: 7,
            id: 2
            }
        ]
        }
    ]

    const Kurssi = () => {
        const title = () => <h1>Opetusohjelma</h1> ; console.log("title")
        const head = (kurssi) => <h2> {kurssi.nimi} </h2>; console.log("head")
        const body = (kurssi) => <div> {kurssi.osat.map( osa => <p key={osa.id}> {osa.nimi} {osa.tehtavia} </p> )} </div> ; console.log("body")
        const total = (kurssi) => <div> yhteensä: {kurssi.osat.reduce((accumulator, osa) => {return(accumulator + osa.tehtavia)},0)} tehtävää </div> ; console.log("total")
    
        const opintokok = (kurssit) => <div>{kurssit.map( kurssi => <div key={kurssi.id}> {head(kurssi)}{ body(kurssi)} {total(kurssi)} </div> )} </div>

        return(
            <div>
            {title()}
            {opintokok(kurssit)}
            </div>
        )
    }

    return (
      <div>
        {console.log("main")}
        <Kurssi kurssit={kurssit} />
      </div>
    )
}
  ReactDOM.render(<App />, document.getElementById('root'))