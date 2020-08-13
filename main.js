//Canvas Drawer

const canvas = document.getElementsByTagName('canvas')[0];
canvas.height = window.innerHeight - 69;
canvas.width = window.innerWidth - 20;

//Declare needed variables
const touchArray = [];
let touchDrawing = canvas.getContext('2d');
const colours = [
 '#368acd', '#6900dd', '#acd009', '#fed560', '#acff99', '#984950'
];
let colorIndex = 0;
let line;
let prevX, prevY;

//This function chooses any of the specified colours, used to colour touch points

const randomColour = () => {
 colorIndex++;
 if ( colorIndex >= colours.length ) {
 colorIndex = 0;
 }
 return colours[ colorIndex ];
}

// when the finger touches the screen

canvas.ontouchstart = (e) => {
 e.preventDefault();
 let currentTouch = e.touches[ e.touches.length - 1 ];
 prevX = currentTouch.pageX;
 prevY = currentTouch.pageY;
 touchDrawing.fillStyle = randomColour();
}

//when the finger moves on the screen


canvas.ontouchmove = (e) => {
 e.preventDefault();
 let currentTouch = e.touches[ e.touches.length - 1 ];
 let line = canvas.getContext('2d');
 line.beginPath();
 line.lineWidth = 2;
 line.fillStyle = randomColour();
 line.fill();
 line.moveTo( prevX, prevY );
 line.lineTo( 
  currentTouch.pageX,
  currentTouch.pageY
 );
 line.stroke();
 prevX = currentTouch.pageX;
 prevY = currentTouch.pageY;
}

//

canvas.ontouchend = (e) => {
 e.preventDefault();
 
}

//This function clears all drawings on the canvas

const clearCanvas = () => {
canvas.getContext('2d').clearRect(
  0, 0, canvas.width,
  canvas.height
 );
}

//Done!