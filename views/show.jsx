const React = require('react')
const computer = require('../models/computer')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
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
    <a href={`/computers/${index}/edit`}><button>Edit</button></a>
    <form action={`/computers/${index}?_method=DELETE`} method="POST">
      <input type="submit" value="DELETE" />
    </form>
    <img src={computer.image} alt={computer.name}/>
    <li><a href="/computers">Go home</a></li>
   </Default>
  )
}

module.exports = Show