var port = 8324;
var io = require('socket.io')(port);
var cfg = require('./config.js');

console.log("Socket.io started on port:",port)

//maintain a list of active clients
var clients = [];

// console.log(cfg.zones)

io.on('connection', function (socket) {
	clients.push(socket);

	socket.emit('zones', cfg.zones) 

	//io.emit('this', { will: 'be received by everyone'});

	// socket.on('private message', function (from, msg) {
	// 	console.log('I received a private message by ', from, ' saying ', msg);
	// });

	socket.on('disconnect', function () {
		//io.emit('user disconnected');
		clients.splice(clients.indexOf(socket), 1);
	});
});