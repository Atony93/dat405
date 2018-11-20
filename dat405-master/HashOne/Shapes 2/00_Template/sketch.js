

  var x = [];
  var y = [];
  var r = [];
  var re, g, b;
  var maxCount = 500;
  var currentCount = 10;
  function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(0.5);
    frameRate(15);


  // first ellipse location
  x[0] = mouseX;
  y[0] = mouseY;
  r[0] = 5;
}

  function draw() {
  //clear();
  //if (keyIsPressed) {
    //frameRate(200);
  //}

  // creates a random set of parameters
  var newR = random(1, 7);
  var newX = random(newR, width - newR);
  var newY = random(newR, height - newR);

  var closestDist = Number.MAX_VALUE;
  var closestIndex = 0;

  // closest circle
  for (var i = 0; i < currentCount; i++) {
  var newDist = dist(newX, newY, x[i], y[i]);
  if (newDist < closestDist) {
      closestDist = newDist;
      closestIndex = i;
    }
  }

  var angle = atan2(newY - y[closestIndex], newX - x[closestIndex]);

  x[currentCount] = x[closestIndex] + cos(angle) * (r[closestIndex] + newR);
  y[currentCount] = y[closestIndex] + sin(angle) * (r[closestIndex] + newR);
  r[currentCount] = newR;
  currentCount++;

  // createing ellipse's
  for (var i = 0; i < currentCount; i++) {
    fill(re, g, b );
    ellipse(x[i], y[i], r[i] * 2, r[i] * 2);

  }

  //if (currentCount >= maxCount) noLoop();
  }
  function keyPressed() {
    if (key=='1') clear();
    if (key=='2') frameRate (60);
    if (key=='3') re=255; g=0; b=0;
    if (key=='4') re=0; g=255; b=255;
    if (key=='5') re=150; g=50; b=255;

  }
