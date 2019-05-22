class Weather {
  constructor() {
    this.apiKey = 'a1342946053b6207ecd09b56db1d70cf';
  }
  async getWeather() {
    const weatherResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?APPID=${
        this.apiKey
      }&q=London`
    );

    const weather = await weatherResponse.json();

    return {
      weather
    };
  }
}
