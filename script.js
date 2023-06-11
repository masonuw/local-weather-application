var citySubmission = document.querySelector('#city-search-name');
var searchButton = document.querySelector('#search-btn');
var currentCity = document.querySelector('#current-city');
var currentTemp = document.querySelector('#current-temp');
var currentWinds = document.querySelector('#current-winds');
var currentHumidity = document.querySelector('#current-humidity');

var day1Temp = document.querySelector("#temp-day-1");
var day1Winds = document.querySelector("#winds-day-1");
var day1Humidity = document.querySelector("#humidity-day-1");

var day2Temp = document.querySelector("#temp-day-2");
var day2Winds = document.querySelector("#winds-day-2");
var day2Humidity = document.querySelector("#humidity-day-2");

var day3Temp = document.querySelector("#temp-day-3");
var day3Winds = document.querySelector("#winds-day-3");
var day3Humidity = document.querySelector("#humidity-day-3");

var day4Temp = document.querySelector("#temp-day-4");
var day4Winds = document.querySelector("#winds-day-4");
var day4Humidity = document.querySelector("#humidity-day-4");

var day5Temp = document.querySelector("#temp-day-5");
var day5Winds = document.querySelector("#winds-day-5");
var day5Humidity = document.querySelector("#humidity-day-5");

var search1 = document.querySelector("#search-1");
var search2 = document.querySelector("#search-2");
var search3 = document.querySelector("#search-3");
var search4 = document.querySelector("#search-4");
var search5 = document.querySelector("#search-5");
var search6 = document.querySelector("#search-6");
var search7 = document.querySelector("#search-7");
var search8 = document.querySelector("#search-8");
var search9 = document.querySelector("#search-9");
var search10 = document.querySelector("#search-10");

const apiKey = "49249c9a2a980b3432e0c4f887c54cb4"

var lat = "";
var lon = "";
var temp = "";
var winds = "";
var humidity = "";
var city = "";

var temp1 = "";
var winds1 = "";
var humidity1 = "";

var temp2 = "";
var winds2 = "";
var humidity2 = "";

var temp3 = "";
var winds3 = "";
var humidity3 = "";

var temp4 = "";
var winds4 = "";
var humidity4 = "";

var temp5 = "";
var winds5 = "";
var humidity5 = "";

var searches = [];

var citySearch = (event) => {
  event.preventDefault();
  
  city = citySubmission.value.trim();

  var cityLookup = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + "49249c9a2a980b3432e0c4f887c54cb4";

  // console.log(city);

  fetch(cityLookup)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          // console.log(data[0].name);
          lat = data[0].lat;
          lon = data[0].lon;
          city = data[0].name;
          
          findCityWeather();
      });
      } else { 
        window.alert("This didn't work! Please enter a real city!");
}})
};

var citySearchHistory = (search) => { 
  city = search;

  var cityLookup = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + "49249c9a2a980b3432e0c4f887c54cb4";

  // console.log(city);

  fetch(cityLookup)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          // console.log(data[0].name);
          lat = data[0].lat;
          lon = data[0].lon;
          city = data[0].name;
          
          findCityWeather();
      });
      } else { 
        window.alert("This didn't work! Please enter a real city!");
}})
};

function displaySearches() {
  var parsedSearches = JSON.parse(localStorage.getItem('searches'));
  var searchBox = document.getElementById('search-box');

  searchBox.innerHTML = '';

  parsedSearches.forEach((search) => {
    var searchItem = document.createElement('button');

    searchItem.textContent = search;
    searchItem.classList.add('city-card');
    searchBox.appendChild(searchItem);

    searchItem.addEventListener('click', (event) => {
      citySearchHistory(search);
  });
});
};

function renderCityWeather() {
  currentCity.innerHTML = city;
  currentTemp.innerHTML = "Temperature: " + temp + " °F"
  currentWinds.innerHTML = "Winds: " + winds + " MPH"
  currentHumidity.innerHTML = "Humidity: " + humidity + "%"
  
  day1Temp.innerHTML = "Temperature: " + temp1 + " °F"
  day1Winds.innerHTML = "Winds: " + winds1 + " MPH"
  day1Humidity.innerHTML = "Humidity: " + humidity1 + "%"
  
  day2Temp.innerHTML = "Temperature: " + temp2 + " °F"
  day2Winds.innerHTML = "Winds: " + winds2 + " MPH"
  day2Humidity.innerHTML = "Humidity: " + humidity2 + "%"
  
  day3Temp.innerHTML = "Temperature: " + temp3 + " °F"
  day3Winds.innerHTML = "Winds: " + winds3 + " MPH"
  day3Humidity.innerHTML = "Humidity: " + humidity3 + "%"
  
  day4Temp.innerHTML = "Temperature: " + temp4 + " °F"
  day4Winds.innerHTML = "Winds: " + winds4 + " MPH"
  day4Humidity.innerHTML = "Humidity: " + humidity4 + "%"
  
  day5Temp.innerHTML = "Temperature: " + temp5 + " °F"
  day5Winds.innerHTML = "Winds: " + winds5 + " MPH"
  day5Humidity.innerHTML = "Humidity: " + humidity5 + "%"

  searches.push(city);
  console.log(searches);

  let stringSearches = JSON.stringify(searches);
  
  console.log('stringified');

  localStorage.setItem('searches', stringSearches);

  console.log('local storage')

  console.log(localStorage);
}

function findCityWeather() {
  var weatherLookup = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
  fetch(weatherLookup)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {

          temp = data.list[0].main.temp;
          winds = data.list[0].wind.speed;
          humidity = data.list[0].main.humidity;
          
          temp1 = data.list[1].main.temp;
          winds1 = data.list[1].wind.speed;
          humidity1 = data.list[1].main.humidity;        
          
          temp2 = data.list[2].main.temp;
          winds2 = data.list[2].wind.speed;
          humidity2 = data.list[2].main.humidity;
          
          temp3 = data.list[3].main.temp;
          winds3 = data.list[3].wind.speed;
          humidity3 = data.list[3].main.humidity;
          
          temp4 = data.list[4].main.temp;
          winds4 = data.list[4].wind.speed;
          humidity4 = data.list[4].main.humidity;
          
          temp5 = data.list[5].main.temp;
          winds5 = data.list[5].wind.speed;
          humidity5 = data.list[5].main.humidity;

          renderCityWeather();
          displaySearches();
        })
      } else {   
        window.alert("This didn't work! Could not find data for this city!");
      }
    })
}

searchButton.addEventListener('click', citySearch);