const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log("Cliente conectado, id: " + socket.id)
    socket.on('disconnect', () => {

    })
    socket.on('connect', () => {
        console.log("CONECTUOU" + socket.id)
    })

    socket.on('msg', (data) => {
        io.emit('showmsg', data)

    })

})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

http.listen(3000, () => {
    console.log('APP RODANDO NA PORTA 3000')
})