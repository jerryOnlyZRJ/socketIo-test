const express = require('express')
const app = express()
const http = require('http').Server(app)
const path = require('path')
const io = require('socket.io')(http)

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

//传入的socket是链接的特征对象，用于辨别用户身份
io.on('connection', function(socket) {
    console.log(`${socket.id} is connected`)
});

http.listen(3000, function() {
    console.log('listening on port:3000');
});