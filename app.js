const weather = new Weather('Dallas', 'US');

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather());

function getWeather() {
  weather.getWeather().then(weatherData => {
    console.log(weatherData);
    ui.paintUI(weatherData);
  });
}
