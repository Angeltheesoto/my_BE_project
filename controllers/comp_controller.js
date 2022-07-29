// DEPENDENCIES
const e = require('express')
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

// NEW
computers.get('/new', (req, res) => {
 res.render('new')
})

// SHOW 
computers.get('/:arrayIndex', (req, res) => {
 if(Computer[req.params.arrayIndex]){
   res.render('Show',{
    bread: Computer[req.params.arrayIndex],
    index: req.params.arrayIndex,
   })
 } else {
  res.send('404')
 }
})

// CREATE
computers.post('/', (req, res) => {
 if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
 if(req.body.hasGluten === 'on') {
  req.body.hasGluten === 'true'
 } else {
  req.body.hasGluten === 'false'
 }
 Computer.push(req.body)
 // res.send(Computer)
 res.redirect('/computers')
})

// DELETE
computers.delete('/:indexArray', (req, res) => {
  Computer.splice(req.params.indexArray, 1)
  res.status(303).redirect('/computers')
})

// exporting it to be used somewhere else.
module.exports = computers

