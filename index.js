let express = require('express')
let bodyParser = require('body-parser')
let server = express()
let port = 3000

require('./server-assets/db/mlab-config')

server.use(express.static(__dirname + '/public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


let catRoutes = require('./server-assets/routes/cat-routes')
server.use('/api/cats', catRoutes)

let dogRoutes = require('./server-assets/routes/dog-routes')
server.use('/api/dogs', dogRoutes)

let birdRoutes = require('./server-assets/routes/bird-routes')
server.use('/api/birds', birdRoutes)

//DEFAULT ERROR -- CATCH ALL
server.get('*', (req, res, next) => {
  res.status(404).send('NO MATCHING ROUTE')
})

server.listen(port, () => {
  console.log("The server is running on port:", port)
})