 function setup(){
  createCanvas(1000,1000);
  frameRate(15);
}

function draw(){
  if (key == 'a'){
    shape1();
    }
  if (key == 's'){
    shape2();
    }
  if (key == 'd'){
    shape3();
  }
}

function shape1(){
  let x = random(500);
  let y = random(500);
  let size = 100;

  /*fill(0, 255, 255);
  ellipse (x, y, size, size);
  fill (255, 155, 200);
  ellipse (x, y, size - 10, size - 10);
  fill (0, 255, 255);
  ellipse (x, y, size - 20, size - 20);
  fill()
  ellipse (x, y, size - 40, size - 40);
  stroke(0);
  strokeWeight(5);
  ellipse (x, y, size - 60, size - 60);
  stroke(0);
  strokeWeight(1);
  fill(0, 255, 255);
  ellipse (x, y, size - 80, size - 80);*/

}

function shape2(){
  let x = random(500);
  let y = random(500);
  let size = 60;

  fill(120,30,230);
  ellipse (x, y, 50, 50);
  //fill(75,75,200);
  //triangle(x + 40, y +60, x, y);
}

function shape3(){
  let x = (random(500));
  let y = (random(500));
  let size = 50;

  fill(120,35,230);
  rect(x, y, size, size);
  fill(255,80,90);
  rect(x+5, y+5, size-10, size-10);
  fill(255,255,255);
  rect(x+10, y+10, size-20, size-20);
}
