const express = require('express')
const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// ///////////////////////////// GET /////////////////////////////
app.get('/info', (req, res) => {
  const date = new Date()
  res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`)
});

app.get('/api/persons', (req, res) => {
    res.send(persons)
});

app.get('/api/persons/:id', (req, res) => {
  const data = persons.find(person => person.id === Number(req.params.id))
  if (data) {
    res.send(data)
  } else {
    res.status(404).end()
  }
});

// ///////////////////////////// DELETE /////////////////////////////
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
});

app.listen(3001, () => {
  console.log('Server running on port 3001')
})