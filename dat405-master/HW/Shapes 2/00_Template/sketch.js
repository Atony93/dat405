 function setup(){
  createCanvas(1500,1500);
  frameRate(15);
}
function draw(){

  if (keyIsDown(A)){
    customShape1();
    }
  if (keyIsDown(B)){
    customShape2();
    }
  if (keyIsDown(C)){
    customShape3();
  }

function customShape1(){
  let xCoor = (random(1000));
  let yCoor = (random(1000));
  let size = 100;

  fill(255,255,255);
  ellipse (xCoor, yCoor, size);
  fill (255,155,200);
  ellipse (xCoor, yCoor, size - 10);
  fill (255,255,255);
  ellipse (xCoor, yCoor, size - 20);
  fill()
  ellipse (xCoor, yCoor, size - 35);
  stroke(0,0,0);
  strokeWeight(5);
  ellipse (xCoor, yCoor, size - 55);
  stroke(0);
  strokeWeight(1);
  fill(0,255,255);
  ellipse (xCoor, yCoor, size - 75);

}

function customShape2(){
  let xCoordinate = (random(1000));
  let yCoordinate = (random(1000));
  let size = 60;

  fill(120,30,230);
  ellipse (xCoor, yCoor, 50);
  fill(75,75,200);
  triangle(xCoor + 40, yCoor +60, xCoor, yCoor);
}

function customShape3(){
  let xCoordinate = (random(1000));
  let yCoordinate = (random(1000));
  let size = 50;

  fill(120,35,230);
  rect(xCoor, yCoor, size, size);
  fill(255,80,90);
  rect(xCoor+5, yCoor+5, size-10, size-10);
  fill(255,255,255);
  rect(xCoor+10, yCoor+10, size-20, size-20);
}
