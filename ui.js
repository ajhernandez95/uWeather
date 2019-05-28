class UI {
  paintUI(weather) {
    document.getElementById('w-loc').textContent = weather.name;
    document.getElementById('w-desc').textContent =
      weather.weather[0].description;
    document.getElementById('w-temp').textContent = (
      ((weather.main.temp - 273.15) * 9) / 5 +
      32
    ).toFixed(2);
    document
      .getElementById('w-icon')
      .setAttribute(
        'src',
        `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
      );
    document.getElementById('w-humidity').textContent = `Relative Humidity: ${
      weather.main.humidity
    }`;
    document.getElementById('w-press').textContent = `Atmospheric Pressure: ${
      weather.main.pressure
    } hPa`;
    document.getElementById('w-min-temp').textContent =
      'Low: ' + (((weather.main.temp_min - 273.15) * 9) / 5 + 32).toFixed(2);
    document.getElementById('w-max-temp').textContent =
      'High: ' + (((weather.main.temp_max - 273.15) * 9) / 5 + 32).toFixed(2);
  }
}
