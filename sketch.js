var bg;
var backgroundimg;


function preload(){
backgroundimg = loadImage("snow1.jpg");
}



function setup() {
  createCanvas(1200,500);
 
}

function draw() {
  background(backgroundimg);
  
  drawSprites();
}