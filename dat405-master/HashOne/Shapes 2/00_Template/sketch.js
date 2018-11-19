  var maxCount = 10000;
  var currentCount = 1;
  var x = [];
  var y = [];
  var r = [];

  function setup() {
  createCanvas(500, 500);
  strokeWeight(2);
  frameRate(1);

  // first circle
  x[0] = width / 2;
  y[0] = height / 2;
  r[0] = 10;
}

  function draw() {
  clear();
  if (mouseIsPressed) {
    frameRate(20);
  }

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

  // createing ellipse
  for (var i = 0; i < currentCount; i++) {
    fill(255);
    ellipse(x[i], y[i], r[i] * 2, r[i] * 2);

  }

  if (currentCount >= maxCount) noLoop();
}
