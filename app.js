// Init Class Storage()
const storage = new Storage();
// Init Class Weather()
const weather = new Weather(
  storage.getStorage().city,
  storage.getStorage().country
);
// Init Class UI()
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  getWeather();
});
function getWeather() {
  weather.getWeather().then(weatherData => {
    console.log(weatherData);
    ui.paintUI(weatherData);
  });
}

document.getElementById("saveLoc").addEventListener("click", () => {
  changeLoc();
});
function changeLoc() {
  const city = document.getElementById("w-city").value;
  const country = document.getElementById("w-country").value;
  weather.changeLocation(city, country);
  storage.setStorage(city, country);
  getWeather();
}
