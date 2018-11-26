//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(500,300);
  //Set a background color
  background(160);
}

//Rendering function
function draw() {

// stroke width
strokeWright (5);

//line from top left to bottom right
stroke(0,255,0);
line(25,25,475,275);

//line from top right to bottom left
stroke(255,255,0);
line(475,25,475,275);

//line from top left to top right
stroke(255,0,255);
line(25,25,475,25);

//line from  top left to bottom left
stroke(0,255,255);
line(25,25,25,275);

// line from top right to bottom right
stroke(255,160,0);
line(475,25,475,275);

//live from bottom left to bottom right
stroke(150,255,0);
line(25,275,475,275);

noStoke();

//top left
fill(0,255,1000);
ellipse(25,25,50,50);

//top right
]fill(255,0,0,1000);
ellipse(475,25,50,50);

//bottom right
fill(255,255,0,1000);
ellipse(475,275,50,50);

//bottom left
fill(0,255,0,1000);
ellipse(25,275,50,50);

  console.log("Rendering...")
  noLoop();
}
