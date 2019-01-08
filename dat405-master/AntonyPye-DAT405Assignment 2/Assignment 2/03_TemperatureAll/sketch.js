//http://api.openweathermap.org

var weather; //delcaring varibles
var apiKey = "6b4a465ac9894c63172283b3f271c20c"; // these are the api's
var api = "http://api.openweathermap.org/data/2.5/weather?q="; // this is the website linked to the api
let units = "&units=metric&appid=";  // these are the mesaurements scales
var input; // this is for the button
let dPlay;
let cityName = "tokyo"; // the loaction for the search
var mapRed, mapBlue; // these are the variables for the scales of colours in the central text box
var therm1 // this variable is for the thermomitor on the left side of the project


function preload(){ //loads any realted data or media files
  var url =  "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid="+apiKey; // the text/string is formatted  with the location we want to use and our own api key
  weather = loadJSON(url); // the url is sent to loadJSON that returns the data to the weather variable
  console.log(weather); // returns the data

}

function setup() {
  createCanvas(1280, 720); // canvas size
  textAlign(CENTER); // the positioning of the text
  textSize(20); // the size of the text

  var button = select ('#search'); // variable for the search button

  button.mousePressed(weatherReq); // when the mouse is pressed it will search for whats been inputed

  input = select('#city'); //  title of the button
}
  function weatherReq(){

    cityName = input.value()
    url =  "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid="+apiKey;
    weather = loadJSON(url);
    console.log(weather);

}

  function draw() {


  background (map(weather.clouds.all,0, 80, 75, 255)); // this si the background of the application this changes colour depending on the cloud coverage

  rect(20,50,50,650); // this is the bottom of the thermomitor

  fill (mapRed, 0, mapBlue); // this is the fill for the central rectangle
  rect(405, 200, 400, 200, 50); // this is the central rectanages dimensions
  therm1 = map(weather.main.temp,-5, 35, 0, 650); // this is the inside if the thermomitor
  rect(20,50,50,therm1); // this is part of the thermomitor



  fill (250); // this is the text colour of the clouds text
  rect(450, 550, 300, 100); // this is the rectange for the clouds

  fill(80); // this is the colour of the clouds rectangle
  text("cloud coverage is " +weather.clouds.all +"%", 605 ,600);// this si the text for the clouds
  fill(255); // this is the text colour for the central rectangle
  text("Weather in " + weather.name ,600, 300); // this displays the search town in the central rectangle
  fill (0);
  text(weather.main.temp + " °C",45, 40); // this displays the temperature about the thermomitor
  mapRed = map(weather.main.temp, -5, 35, 0, 255); // this changes the colour of the central box from blue to red
  mapBlue = map(weather.main.temp, -5, 35, 255, 0); // this changes the colour of the central box from blue to red

}
