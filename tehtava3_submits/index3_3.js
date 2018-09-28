const express = require('express')
const app = express()

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Martti Tienari',
    number: '040-123456',
    id: 2
  },
  {
    name: 'Arto Järvinen',
    number: '040-123456',
    id: 3
  },
  {
    name: 'Lea Kutvonen',
    number: '040-123456',
    id: 4
  },
  {
    name: 'matti teppo',
    number: '123123',
    id: 5
  },
  {
    name: 'joksu',
    number: '123456',
    id: 6
  },
  {
    name: 'kalle',
    number: '123456',
    id: 7
  },
  {
    name: 'jorma',
    number: '321564',
    id: 8
  },
  {
    name: 'juuso',
    number: '654',
    id: 9
  },
  {
    name: 'einö',
    number: '456',
    id: 10
  }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
  
app.get('/api/persons', (req, res) => {
    res.json(persons)
    console.log(persons[0].id)
})

app.get('/info',(req,res) =>{
  let amouth = persons.length
res.send(`Puhelinluettelossa on ${amouth} henkilön tiedot ${'<p>'} ${new Date() } ${'</p>'}`)
})

app.get('/api/persons/:id',(req,res) => {
  let id = Number(req.params.id)
  console.log(id)
  let value = persons.find(person => person.id === id)
  console.log(value)
    if ( value ) {
      res.json(value)
    } else {
      res.status(404).end()
    }
})

const port = 3001
app.listen(port, () => {
console.log(`Server running on port ${port}`)
})