let getLocation ="Dis1";
let apiKey ="a25f1b29cafd447bb235da849908e2fd";
let Loc1;
let data1;


function preload(){
let url1 ="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a25f1b29cafd447bb235da849908e2fd";
Loc1 = loadJSON(url1);
}


function setup() {
  console.log(Loc1);


  createCanvas(1280, 720);
  background(160);
  textAlign(CENTER);
  textSize(18);
}

function draw(){


  data1 = map();
  background(150);
  stroke(255);
  fill(100);
  rect (400,250,400,200,50);

  fill(100);
  rect(50,50,100,30);

}
