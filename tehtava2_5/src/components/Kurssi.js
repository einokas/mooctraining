import React from 'react'

const Kurssi = ({kurssit}) => {
    const title = () => <h1>Opetusohjelma</h1> ; console.log("title")
    const head = (kurssi) => <h2> {kurssi.nimi} </h2>; console.log("head")
    const body = (kurssi) => <div> {kurssi.osat.map(osa => <p key={osa.id}> {osa.nimi} {osa.tehtavia} </p> )} </div> ; console.log("body")
    const total = (kurssi) => <div> yhteensä: {kurssi.osat.reduce((accumulator, osa) => {return(accumulator + osa.tehtavia)},0)} tehtävää </div> ; console.log("total")
    const opintokok = (kurssit) => <div> {kurssit.map(kurssi => <div key={kurssi.id}> {head(kurssi)}{ body(kurssi)} {total(kurssi)} </div> )} </div>

    return(
        <div>
        {title()}
        {opintokok(kurssit)}
        </div>
    )
}
export default Kurssi