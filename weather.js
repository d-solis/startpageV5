let weather = { //Get you api key from openweathermap.org
    "apikey": "e49ae78c30d6e842a2841907db176af6",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey)
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        temp = round(temp);
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
    },

    search: function () {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

weather.fetchWeather("Kansas City Kansas"); //Change your location here
