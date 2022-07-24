// DEPENDENCIES
const express = require('express')
const computers = express.Router()
const Computer = require('../models/computer.js')

// INDEX - creating a new route
computers.get('/', (req, res) => {
 res.render('index', 
  {
   computers: Computer,
   title: 'Index Page'
  }
 )
 // res.send(Computer) 
})

// SHOW 
computers.get('/:arrayIndex', (req, res) => {
 res.send(Computer[req.params.arrayIndex])
})

// exporting it to be used somewhere else.
module.exports = computers