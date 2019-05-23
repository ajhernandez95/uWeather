class Weather {
  constructor() {
    this.apiKey = "a1342946053b6207ecd09b56db1d70cf";
  }
  async getWeather(city, country) {
    const weatherResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?APPID=${
        this.apiKey
      }&q=${city}, ${country}`
    );

    const weather = await weatherResponse.json();

    return {
      weather
    };
  }

  kelToFah(kel) {
    const fah = (kel - 273.15) * (9 / 5) + 32;

    console.log(fah);
  }

  kelToCel(kel) {
    const cel = kel - 273.15;

    console.log(cel);
  }
}
