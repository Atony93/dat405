var xc = [];
var yc = [];
var rc = [];
//var bg;
var re, g, b;
var maxCount = 1000; // total amount of ellipse's created
var currentCount = 10;

function setup() {
  createCanvas(594,841); // canvas size
  //bg = loadImage("snowflake.jpg");
  //background(bg);
  strokeWeight(0.25); // ellipse,s outline
  frameRate(1); // speed of ellipses created per second

  xc[0] = width/2;  // first ellipse location
  yc[0] = height/2;
  rc[0] = 5;
}

function draw() { //12 creates a random set of parameters
  var closestIndex = 0;
  var closestDist = Number.MAX_VALUE;
  var newR = random(1, 7);
  var newX = random(newR, width - newR);
  var newY = random(newR, height - newR);

console.log(currentCount)

  for (var i = 0; i < currentCount; i++) {
    var newDist = dist(newX, newY, xc[i], yc[i]);
    if (newDist < closestDist) {
      closestDist = newDist;
      closestIndex = i;
    }
    fill(re, g, b );
    ellipse(xc[i], yc[i], rc[i] * 2, rc[i] * 2);
  }

  var angle = atan2(newY - yc[closestIndex], newX - xc[closestIndex]);
  xc[currentCount] = xc[closestIndex] + cos(angle) * (rc[closestIndex] + newR);
  yc[currentCount] = yc[closestIndex] + sin(angle) * (rc[closestIndex] + newR);
  rc[currentCount] = newR;
  currentCount++;
}

function mousePressed(){
  //background(255);
  for (var i = 0; i < currentCount; i++) {
    xc = [];  // first ellipse location
    yc = [];
    rc = [];

    xc[0] = mouseX;  // first ellipse location
    yc[0] = mouseY;
    rc[0] = 5;
  }
    //rc[0] = 5;
}

function keyPressed() { // function keys
  if (key=='1') frameRate (60); // increases speed of ellipse's
  if (key=='2') frameRate (1); // decreases speed of ellipse's
  if (key=='3') re=211; g=211; b=211, 50; // changes colour - 
  if (key=='4') re=0; g=255; b=255, 50; // changes colour - blue
  if (key=='5') re=150; g=50; b=255, 50; // changes colour - teal
  if (key=='6') re=255; g=255; b=255, 50; // changes colour - white
}
