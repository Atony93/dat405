//let size= random(500);
function setup() {
  createCanvas(1000,1000);
  frameRate(15);
}

function draw() {
  customShape ();
  fill (random(255),random(255),random(255),random(50));
  noStroke();
  ellipse (random(1000),random(1000),random(400));
}
function customShape(){
}
