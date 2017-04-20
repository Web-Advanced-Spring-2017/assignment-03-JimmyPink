var socket;

function setup(){
	createCanvas(400, 400);
	background(51);
	
	socket = io.connect('http://localhost:3000');
	socket.on('mouseMoving' , newDrawing);

}
 
function newDrawing(data){
	noStroke();
	fill(255,0, 100);
	ellipse(data.x , data.y, 6, 6)
	console.log("new data: " + data.x + " " + data.y);
// socket.emit('mouse' , datab);

}

function mouseDragged(){
	 console.log("sending: " + mouseX + ' , ' + mouseY);


	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse', data);
		noStroke();
		fill(255);
		ellipse(mouseX , mouseY, 5, 10);
}

function draw(){
	//  newDrawing();

}