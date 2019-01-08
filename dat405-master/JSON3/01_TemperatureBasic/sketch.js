//http://api.openweathermap.org

//Use a text/string object to assign the city we would like to know the weather of

//let getLocation = "Plymouth";
let getLocationL = "London";
let getLocationA= "Athens";
let getLocationS = "Shanghai";
//The API key has to be given by the openweathermap.org website (for free / per account)
let apiKey = "6b4a465ac9894c63172283b3f271c20c";
//This variable will store the JSON weather data
let size1, size2, size3 ;
let weather1, weather2, weather3;


//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //http://api.openweathermap.org
  //The text/string object is formatted with the location we want to use, and our own API key
  //let url = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation+"&units=metric&appid="+apiKey;
  let url1 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocationL+"&units=metric&appid="+apiKey;
  let url2 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocationA+"&units=metric&appid="+apiKey;
  let url3 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocationS+"&units=metric&appid="+apiKey;
  //The URL is sent to the loadJSON that returns the data to the weather variable
  //weather = loadJSON(url);
  weather1 = loadJSON(url1);
  weather2 = loadJSON(url2);
  weather3 = loadJSON(url3);
}

function setup() {
  console.log(weather1, weather2,weather3); //Return all JSON data


  //Display temperature information on the screen
  createCanvas(1000, 1000);
  background(160);
  textAlign(CENTER);
  textSize(18);
  noLoop();
}

function draw(){

  size1 = map(weather1.main.temp, -5, 40, 10, 100);
  fill(map(weather1.main.temp,0 ,20, 0, 255),0, 0);
  ellipse (100, 100, size1, size1);
  fill(255);
  text(getLocationL + weather1.main.temp + "°C",100,100);


  size2 = map(weather2.main.temp, -5, 40, 10, 100);
  fill(map(weather2.main.temp,0 ,20, 0, 255),0, 0);
  ellipse (200, 200, size2, size2);
  fill(255);
  text(getLocationA + weather2.main.temp + "°C",200,200);


  size3 = map(weather3.main.temp, -5, 40, 10, 100);
  fill(map(weather3.main.temp,0 ,20, 0, 255),0, 0);
  ellipse (300, 300, size3, size3);
  fill(255);
  text(getLocationS + weather3.main.temp + "°C",300,300);
