console.log("socket.io is working");

var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("My Socket server is working");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);


function newConnection(socket){
	console.log('new connection:  ' + socket.id);

	socket.on('mouse', mouseMsg);

	function mouseMsg(data){
		socket.broadcast.emit('mouseMoving', data);
// the line below will include posting to yourself back as well
		//io.socket.emit('mouse', data);
		// console.log(data);
	}
 
}

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });


