const express = require('express')
const app = express();

const Users = require('./_tempDB.js')

app.get('/', (req, res) => {
  res.json(Users)
})

app.listen(8000, () => {
  console.log('express server started')
})