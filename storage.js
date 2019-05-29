class Storage {
  constructor() {
    (this.defaultCity = "Dallas"), (this.defaultCountry = "US");
  }
  getStorage() {
    let city, country;
    if (localStorage.getItem("city") === null) {
      city = this.defaultCity;
      country = this.defaultCountry;
    } else {
      city = localStorage.getItem("city");
      country = localStorage.getItem("country");
    }

    return {
      city,
      country
    };
  }
  setStorage(city, country) {
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);
  }
}
