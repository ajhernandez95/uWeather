class UI {
  setWeather(location) {
    const container = document.querySelector(".weatherContainer");

    container.innerHTML = `
     <div class="row mt-5">
        <div class="col-md-6 mx-auto p-5 text-center bg-primary">
          <h1>${location.name}, ${location.sys.country}</h1>
          <h3 class="text-dark">${location.weather[0].description}</h3>
          <h3 id="temp">79.8 F (26.6 C)</h3>
          <img src="" class="img-fluid" id="icon" />
          <ul class="list-group">
            <li id="humidity" class="list-group-item"></li>
            <li id="high" class="list-group-item"></li>
            <li id="low" class="list-group-item"></li>
            <li id="pressure" class="list-group-item"></li>
          </ul>
          <hr />
          <button
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#changeLocation"
          >
            Change Location
          </button>
        </div>
      </div>
     `;
    console.log(location);
  }
}
