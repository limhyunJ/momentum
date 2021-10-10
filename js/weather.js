
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");


const APIKEY = "1ba4af877a18e487ae3a64ac353fd68b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    console.log("You live in", lat, log);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${APIKEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
  };

  function onGeoError() {
    alert("Can't find you. No weather for you.");
  };

  
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
/*
navigator.geolocation.getCurrentPosition(,) --> 2개 값이 있어야 하는데 
순서대로 성공했을때, 실패했을 때임  
*/