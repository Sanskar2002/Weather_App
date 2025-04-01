const apiKey = "af6a0c5f233500a785e266151679d414";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === "404") {
    document.querySelector(".city").innerHTML = "City not found!";
    return;
  }

else{var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  const weatherConditions = {
    Clouds: "./images/cloudy-sunny.png",
    Clear: "./images/sun.png",
    Rain: "./images/rainy-day.png",
    Drizzle: "./images/cloudy-sunny.png",
    Mist: "./images/cloudy.png",
  };

  weatherIcon.src =
    weatherConditions[data.weather[0].main] || "./images/default.png";

  document.querySelector(".weather").style.display = "block";}
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
