  var xc = [];
  var yc = [];
  var rc = [];
  var re, g, b;
  var maxCount = 1000; // total amount of ellipse's created
  var currentCount = 10;
  function setup() {
    createCanvas(594,841); // canvas size
    strokeWeight(0.25); // ellipse,s outline
    frameRate(1); // speed of ellipses created per second

  xc[0] = mouseX;  // first ellipse location
  yc[0] = mouseY;
  rc[0] = 5;
}
  function draw() { // creates a random set of parameters

  var closestIndex = 0;
  var closestDist = Number.MAX_VALUE;
  var newR = random(1, 7);
  var newX = random(newR, width - newR);
  var newY = random(newR, height - newR);
  for (var i = 0; i < currentCount; i++) {
  var newDist = dist(newX, newY, xc[i], yc[i]);
  if (newDist < closestDist) {
      closestDist = newDist;
      closestIndex = i;
    }
  }
  var angle = atan2(newY - yc[closestIndex], newX - xc[closestIndex]);
  xc[currentCount] = xc[closestIndex] + cos(angle) * (rc[closestIndex] + newR);
  yc[currentCount] = yc[closestIndex] + sin(angle) * (rc[closestIndex] + newR);
  rc[currentCount] = newR;
  currentCount++;
  // drawing ellipse's
  for (var i = 0; i < currentCount; i++) {
    fill(re, g, b );
    ellipse(xc[i], yc[i], rc[i] * 2, rc[i] * 2);
  }
  }
  function keyPressed() { // function keys
    if (key=='1') frameRate (60); // increases speed of ellipse's
    if (key=='2') frameRate (1); // decreases speed of ellipse's
    if (key=='3') re=255; g=0; b=0; // changes colour - pink
    if (key=='4') re=0; g=255; b=255; // changes colour - blue
    if (key=='5') re=150; g=50; b=255; // changes colour - violet

  }
