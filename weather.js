const weather = document.querySelector(".js-weather");

const API_KEY= "1a803e620cc365411bcff403cdbd07ff";
const COORDS ='coords';

function getWeather(lat,lon){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
  return response.json();
}).then(function(json){
  const temperature = json.main.temp;
  const place = json.name;
  weather.innerText= `현재온도 : ${temperature}도 , 현재위치 : ${place}`;
});
}
function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}

function handleGeoError(){
  console.log('Cant access geo location');
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify(coordsObj));

}

function handleGeoSucces(position){
  
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude : latitude,
    longitude: longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude,longitude)
}



function loadCoords(){
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCords === null){
      askForCoords();
  }else{
    const parsedCoords=JSON.parse(loadedCords);
    getWeather(parsedCoords.latitude,parsedCoords.longitude);
  }
}


function init(){

loadCoords();

}

init();