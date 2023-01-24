const apiKey = "97687bd033c04ecea2a64fd74cf9242b";
const h1City = document.querySelector("#city");
const divTemp = document.querySelector("#temp");
const searchBtn = document.querySelector("#search-btn");
const input = document.querySelector("#city-input");
const divClouds = document.getElementById("clouds");
const divHumidity = document.getElementById("humidity");
const divPressure = document.getElementById("pressure");
const divWind = document.getElementById("wind");
const divWeather = document.getElementById("vrijeme");
const imgIcon = document.getElementById("icon");

const handleSearch = () => {
  // Procitaj input -> koji je grad
  const city = input.value.trim();
  if (city.length < 2) {
    return;
  }
  // napravi url za taj grad
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // dohvati vrijeme
  const request = new XMLHttpRequest();
  request.open("GET", url, true);

  request.onload = () => {
    if (request.status === 200) {
      const responseObject = JSON.parse(request.response);
      const temperature = responseObject.main.temp;
      const clouds = responseObject.clouds.all;
      const humidity = responseObject.main.humidity;
      const wind = responseObject.wind.speed;
      const pressure = responseObject.main.pressure;
      const weather = responseObject.weather[0].description;
      const icon = responseObject.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      h1City.innerText = city;
      imgIcon.src = `${iconUrl}`;
      divTemp.innerHTML = `Temperature is: ${temperature.toFixed()} &#8451;`;
      divClouds.innerHTML = `Clouds: ${clouds}%`;
      divHumidity.innerHTML = `Humidity: ${humidity}%`;
      divWind.innerHTML = `Wind: ${wind} m/s`;
      divPressure.innerHTML = `Pressure: ${pressure}hPa`;
      divWeather.innerHTML = `Weather: ${weather}`;
    } else if (request.status >= 400 && request.status < 500) {
      h1City.innerText = `${city} nije nađen`;
      divTemp.innerHTML = "";
    } else {
      h1City.innerText = `Dogodila se greška. Pokušajte opet.`;
    }
    input.value = "";
  };
  request.send();
};

const handleInputKey = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};

searchBtn.addEventListener("click", handleSearch);
input.addEventListener("keypress", handleInputKey);
