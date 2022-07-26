// DEPENDENCIES - Using expressJS
const express = require('express')

// CONFIGURATION - connected to the port 3003
require('dotenv').config() 
const PORT = process.env.PORT 
const app = express()

// MIDDLEWARE - This allows our views folder to be seen and connects everything together.
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) // connects public folder

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

