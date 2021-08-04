const express = require('express')
const route = express.Router()
const questionController = require('./controllers/question.controller')
const roomController = require('./controllers/room.controller')

// ROTAS
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-pass', (req, res) => res.render('index', { page: 'create-pass' }))
route.post('/create-room', roomController.create)
route.get('/room/:roomId', roomController.open)
route.post('/question/:roomId/:questionId/:action', questionController.index)
route.post('/question/create/:roomId', questionController.create)


module.exports = route  