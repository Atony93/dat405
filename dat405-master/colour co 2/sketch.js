  function setup (){
    createCanvas (400,400);
}

  function draw (){
    background (0);
}
var mouse1 = map(mouseX, 0, width, 0, 255);
var mouse2 = map(mouseY, 0, width, 0, 255);
var mouse3 = map(mouseX, 0, width, 255, 0);
var mouse3 = map(mouseY, 0, width, 255, 0);

var color1 = color(255, 0, 0, mouse1);
var color2 = color(0, 255, 0, mouse2);
var color3 = color(0, 0, 255, mouse3);
var color4 = color(0, 255, 255, mouse4);

fill (color1);
rect(0, 0, width/2, height/2);
fill (color2);
rect(width/2, 0, width/2, height/2);
fill (color3);
rect(0, height/2, width/2, height/2);
fill (color4);
rect(width/2, height/2, width/2, height/2);
}
/*let size2 = 30;
let size = 50;
function setup () {
    frameRate(2);
    createCanvas (500,500);
    background  (0);
}


function draw() {
      fill (255);
    for (var y = 0; y < 10; y++)
    {
      for (let x = 0; x < 10; x++) {
      rect (size*x, size*y, size, size);

      }
    }
    for (var y2 = 0; y2 < 10; y2++)
    {

      for (let x2 = 0; x2 < 10; x2++) {
      fill (random(255), random(255), random(255))
      rect (size*x2 +10, size*y2 + 10, size2, size2);
*/
      }
    }
}
