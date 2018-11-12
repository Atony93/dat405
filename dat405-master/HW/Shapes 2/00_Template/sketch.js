var s = 1 ;
 function setup(){
  createCanvas(1000,1000);
  frameRate(15);
}

function draw(){

if (s == 1) shape1 ();
else if (s==2) shape2();
else if (s==3) shape3();


/*  if (key == 'a'){
    shape1();
    }
  if (key == 's'){
    shape2();
    }
  if (key == 'd'){
    shape3();
  }*/

}
function keyPressed (){
  if (key ==1 ) s = 1;
  if (key ==2 ) s = 2;
  if (key ==3 ) s = 3;
}

// circle
function shape1(){
  let x = random(500);
  let y = random(500);
  let size = 50;

  fill(0, 0, 0, 50);
  ellipse (x, y, size, size);
  /*
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
// triangle
function shape2(){
  let x = random(500);
  let y = random(500);
  let size = 60;

/*  fill(120,30,230);
  ellipse (x, y, 50, 50);*/
  fill(45, 242, 255, 50);
  triangle(x +40, y +60, x, y, x -40, y +60 );
}
// square
function shape3(){
  let x = (random(500));
  let y = (random(500));
  let size = 50;

  fill(255, 14, 35, 50);
  rect(x, y, size, size);
  fill(76, 255, 51,50);
  rect(x+5, y+5, size-10, size-10);
  fill(255, 255, 255);
  rect(x+10, y+10, size-20, size-20);
}
