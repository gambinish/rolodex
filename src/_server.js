const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

// var corsOptions = {
//   origin: 'localhost:4200',
//   optionsSuccessStatus: 200
// }

app.use(bodyParser.json());
app.use(cors())

const Users = require('./_tempDB.js')

app.get('/users', (req, res) => {
  res.json(Users)
  // res.sendFile(Users)
})

app.route('api/users').get((req, res) => {
  res.send(Users)
})

app.listen(8000, () => {
  console.log('express server started')
})