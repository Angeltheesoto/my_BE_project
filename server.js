// DEPENDENCIES - Using expressJS
const express = require('express')
const methodOverride = require('method-override')

// CONFIGURATION - connected to the port 3003
require('dotenv').config() 
const PORT = process.env.PORT 
const app = express()

// MIDDLEWARE - This allows our views folder to be seen and connects everything together.
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) // connects public folder
app.use(express.urlencoded({extended: true})) // The data is coming in as a urlencoded string, just as we have set it up in Postman. We need to change the string into an object so we can work with it.
app.use(methodOverride('_method')) // The app.use() function takes a callback, methodOverride(), which is a function we required in our dependencies. Next, we will pass the string that will trigger the method override.

// ROUTES - This is the main page that shows when loaded up. First route
app.get('/', (req, res) => {
 res.send('Welcome to an awsome app about computer builds.')
})

// COMPUTERS - connected to controller file 
const compController = require('./controllers/comp_controller.js')
app.use('/computers', compController)

// LISTEN - Listening in the terminal if it goes through.
app.listen(PORT, () => {
 console.log('Showing port at http://localhost:', PORT)
})

// 404 Page
app.get('*', (req, res) => {
 res.send('404')
})

