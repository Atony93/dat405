
let locationArray = ["Plymouth", "Tanta", "Birmingham", "Pesaro", "Paris", "Shanghai"];
let apiKey = "6b4a465ac9894c63172283b3f271c20c";
let weather = [];

function preload() {

  for (let i=0; i<locationArray.length; i++){
    let url = "http://api.openweathermap.org/data/2.5/weather?q="+locationArray[i]+"&units=metric&appid="+apiKey;
    weather[i] = loadJSON(url);
  }
}

function setup() {
  createCanvas(600, 600);
  textSize(18);
  noLoop();
}

function draw() {
  let mapColor = [];


  for (let i=0; i<weather.length; i++){

    if (weather[i].main.temp<-5){
      mapColor[i] = color(36, 194, 203, 255);
    } else if (weather[i].main.temp>-5 && weather[i].main.temp<5){
      mapColor[i] = color(196, 208, 234, 255);
    } else if (weather[i].main.temp>5 && weather[i].main.temp<10){
      mapColor[i] = color(234, 231, 222, 255);
    } else if (weather[i].main.temp>10 && weather[i].main.temp<20){
      mapColor[i] = color(234, 208, 155, 255);
    } else if (weather[i].main.temp>20){
      mapColor[i] = color(234, 143, 0, 255);
    }


    let pos = i * 200;
    if(pos<600){
      fill(mapColor[i]);
      rect(pos, 0, width/2, height/2)
      fill(0);
      text(weather[i].name, pos+10, height/4-30);
      text("Temperature: " + weather[i].main.temp + "°C", pos+10, height/4);
      text("Humidity: " + weather[i].main.humidity + "%", pos+10, height/4+30);
    } else {
      fill(mapColor[i]);
      rect(pos-600, height/2, width/2, height/2)
      fill(0);
      text(weather[i].name, pos-600+10, height-150-30);
      text("Temperature: " + weather[i].main.temp + "°C", pos-600+10, height-150);
      text("Humidity: " + weather[i].main.humidity + "%", pos-600+10, height-150+30);
    }
  }
}
