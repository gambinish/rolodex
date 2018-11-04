const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())

// const Users = require('./_tempDB.js')

// simualate retrieving all users from the db
// app.get('/users', (req, res) => {
//   res.json(Users)
// })

app.get('/users', (req, res) => {
  Users
    .fetchAll()
    .then(items => {
      console.log(items)
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('error: ', err)
    })
})

// simulate a request to get single contact detail page
app.get('/users/:id', (req, res) => {
  let id = req.params.id
  Users.filter(contact => {
    if (contact.id.toString() === id) {
      console.log(contact)
      res.json(contact)
    }
  })
})

// simulate a post request to db by adding to _temp.DB array
app.post('/users/new', (req, res) => {
  let request = req.body;
  Users.push(request);
  res.json(request);
})

// validate on console that server is running
app.listen(8000, () => {
  console.log('express server started')
})