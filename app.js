// Init Weather
const weather = new Weather();
// Init UI
const ui = new UI();
// Set default location vars
let city = "Dallas",
  country = "US";

document.addEventListener("DOMContentLoaded", () => {
  weather.getWeather(city, country).then(data => {
    ui.setWeather(data.weather);
  });
});
