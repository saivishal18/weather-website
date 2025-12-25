async function getWeather(){
    let city = document.getElementById("city").value;
    

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Apikey}`;

    let response = await fetch(url);
    let data = await response.json();

    document.getElementById("showWeather").innerHTML = `Temperature: ${data.main.temp} degree Celsius <br>
    Weather : ${data.weather[0].description}`;

}
