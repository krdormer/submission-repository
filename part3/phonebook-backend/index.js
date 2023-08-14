const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const reactPhonebookAppPath = '../phonebook/build'

morgan.token('body', function (req) { return JSON.stringify(req.body) })

app.use(express.json())
app.use(express.static(reactPhonebookAppPath));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())

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

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
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

// ///////////////////////////// POST /////////////////////////////
const generateId = (list) => {
  const maxId = list.length > 0
    ? Math.max(...list.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  if (persons.find(person => person.name === body.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    id: generateId(persons),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  response.json(person)
})

// ///////////////////////////// DELETE /////////////////////////////
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
});

app.listen(3001, () => {
  console.log('Server running on port 3001')
})