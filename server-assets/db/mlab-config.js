//PRETTY MUCH SAME EVERYTIME -- C&P ok!

let mongoose = require('mongoose')
//this is the only line that will change fom project to project
const connectionString = 'mongodb://student:student1@ds028540.mlab.com:28540/petshop'
//
let connection = mongoose.connection

//go try to connect to mongoDB -- establishes connection
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//consle log any errors coming from the database
connection.on('error', err => {
  console.log('DATA BASE ERROR: ', err)
})

//confirms connection to database
connection.once('open', () => {
  console.log("connected to database")
})