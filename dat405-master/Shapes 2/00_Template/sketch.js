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
}

//Rendering function
function draw() {
  //Set a background color
  background(160);

  //an ellispe 1
  fill (0, 0, 225);
	ellipse(40, 40, 80, 80);
  //an ellispe 2
  fill (0, 255, 0)
  ellipse(40, 260, 80, 80);
  line (40, 260, 40, 40)
  line (260, 40, 460, 260)
  //an ellispe 3
  fill (255, 255, 0)
  ellipse(460, 260, 80, 80);
  line (460, 260, 40, 40)
  line (40, 260, 460, 260)
  //an ellispe 4
  fill (255, 0, 0)
  ellipse(460, 40, 80, 80);
  line (460, 40, 40, 40)
  line (460, 40, 460, 260)
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Rendering...")
  noLoop();
}
