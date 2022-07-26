const React = require('react')
const computer = require('../models/computer')
const Default = require('./layouts/Default')

function Show ({bread}) {
 console.log(bread.name)
  return (
   <Default>
    <h2>Show Page</h2>
    <h3>{computer.name}</h3>
    <p>
      and it 
      {
        computer.hasGluten
        ? <span> does </span>
        : <span> does NOT </span>
      }
      have gluten.
    </p>
    <img src={computer.image} alt={computer.name}/>
    <li><a href="/computers">Go home</a></li>
   </Default>
  )
}

module.exports = Show