const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, '../build')))

const PORT = process.env.EXPRESS_CONTAINER_PORT || 8000

const Contacts = require('./db/models/contacts.js')

// const Users = require('./_tempDB.js')

app.get('/users', (req, res) => {
  Contacts
    .fetchAll()
    .then(items => {
      // console.log(items)
      // res.json(items)
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('error: ', err)
    })
})

// simulate a request to get single contact detail page
app.get('/users/:id', (req, res) => {
  let id = req.params.id

  Contacts
    .fetchAll()
    .then(items => {
      items.filter(contact => {
        if (contact.id.toString() === id) {
          // console.log(contact)
          res.json(contact.serialize())
        }
      })
      // res.json(items.serialize())
    })
    .catch(err => {
      console.log('error: ', err)
    })

  // Users.filter(contact => {
  //   if (contact.id.toString() === id) {
  //     // console.log(contact)
  //     res.json(contact.serialize())
  //   }
  // })
})

// simulate a post request to db by adding to _temp.DB array
app.post('/create', (req, res) => {

  const item = req.body
  console.log('REQ.BODY: ', req.body)
  // console.log('SERVER POST: ', item)

  Contacts
    .forge(item)
    .save()
    .then(result => {
      return Contacts.fetchAll()
    })
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })
  // res.json(request);
})

// validate on console that server is running
app.listen(PORT, () => {
  console.log(`express server started ${PORT}`)
})