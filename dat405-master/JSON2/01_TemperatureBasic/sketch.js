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
  //console.log()
  //console.log("Location: " + getLocation) //Show the location we are searching
  //console.log("Temperature: " + weather.main.temp + "°C"); //Show location's conditions (temperature)
  //console.log("Temperature (min): " + weather.main.temp_min + "°C"); //Minimum temperature
  //console.log("Temperature (max): " + weather.main.temp_max + "°C"); //Maximum temperature
  //console.log("Humidity: " + weather.main.humidity); //Humidity
  //console.log("Pressure: " + weather.main.pressure); //Pressure

  //Display temperature information on the screen
  createCanvas(1000, 1000);
  background(160);
  textAlign(CENTER);
  textSize(18);



//  text("Current Temperature in Plymouth is " + weather.main.temp + "°C", width/2, height/2);

  //text("Current Temperature in London is " + weather1.main.temp + "°C", width/2, height/4);
  //text("Current Humidity in Athens is " + weather2.main.humidity + "%", width/2, height/2);
  //text("Current Wind Speed in Shanghai is " + weather.wind.speed + "MPH", width/2, height/2+height/4);
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



    //let templondon = weather1.main.temp*10
    //let tempathens = weather2.main.temp*10
    //let tempshanghai = weather3.main.temp*10

    //ellipse(200,200,templondon,templondon);
    //text("Lon " + weather1.main.temp + "°C",200,200);

    //ellipse(400,400,tempathens,tempathens);
    //text("Ath " + weather2.main.temp + "°C",400,400);

    //ellipse(600,600,tempathens,tempathens);
    //text("Shan " + weather3.main.temp + "°C",600,600);

}
