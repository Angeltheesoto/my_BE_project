const React = require('react')
const Default = require('../views/layouts/default')

function Index({computers, title}) {
 return (
  <Default title={title}>
   {/* <h2>Index Page</h2>
   <p>I have {computers[0].name} computer!</p> */}

   {/* We cant use a for loop in jsx so we will need to use .map() */}
   <ul>
    {
     computers.map((computer, index) => {
      return (<li key={index}>
       <a href={`/computers/${index}`}>
       {computer.name}
       </a>
      </li>)
     })
    }
   </ul>
   <div className="newButton">
    <a href="/computers/new"><button>Add a new computer</button></a>
   </div>
  </Default>
 )
}

// exporting to the controller
module.exports = Index