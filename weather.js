class Weather {
  constructor(city, country) {
    (this.city = city),
      (this.country = country),
      (this.apiKey = "a1342946053b6207ecd09b56db1d70cf");
  }

  async getWeather() {
    const requestWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}, ${
        this.country
      }&APPID=${this.apiKey}`
    );

    const responseWeather = await requestWeather.json();

    return responseWeather;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
