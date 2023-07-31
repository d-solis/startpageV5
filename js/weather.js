let weather = {
  // Get your API key from openweathermap.org
  apikey: "e49ae78c30d6e842a2841907db176af6",

  fetchWeather: function (location) {
      fetch(
          "https://api.openweathermap.org/data/2.5/weather?id=" +
          location +
          "&units=imperial&appid=" +
          this.apikey
      )
          .then((response) => response.json())
          .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
      const { icon, description } = data.weather[0];
      let { temp } = data.main;
      temp = Math.round(temp);
      console.log("Weather Icon URL:", "https://openweathermap.org/img/wn/" + icon + ".png");
      console.log("Description:", description);
      console.log("Temperature:", temp + "°F");
  },

  search: function () {
      const cityId = document.querySelector(".searchbar").value;
      this.fetchWeather(cityId);
  },
};

weather.fetchWeather("4273857"); // Example: London, United Kingdom (City ID: 2643743)
