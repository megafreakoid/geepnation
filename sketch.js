//The setup function only happens once
var star=75;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127); // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(60,20,20,star); // center of canvas, 20px dia

  fill(random(0,255),120,177,mouseX);

rect(random(60,195), random(height),100,50);
strokeWeight(4)
stroke(233,109,64)
line(55,150,400,mouseX);
  textSize(25);
  textFont("Open Sans");
  text('to the edge of the universe and back',50,100);
}
function mousePressed(){
  if (star>=185)
    {star=75;
} else {

  star=star+10;}
}