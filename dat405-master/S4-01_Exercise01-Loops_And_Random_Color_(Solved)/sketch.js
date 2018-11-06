let size= random(500);
function setup() {
  createCanvas (1000,1000);
  framerate(15);

}

function draw(){
  fill (random(255),random(255),random(255));
  ellipse (random(100),random(100),random(200));
}
