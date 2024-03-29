const express = require('express')
const routes = require('./routes')
const path = require('path')


const server = express()


server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))

server.use(express.urlencoded({ extended: true }))

server.use(routes)

server.listen(3000, () => console.log('----- Server running on port 3000 -----'))

// P A 05 1:12:05
