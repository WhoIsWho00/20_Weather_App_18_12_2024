const apiKey = "4ca7a7ca3613acecb6d86c9cccd8d920"

const btn = document.querySelector("#getWeatherBtn");
const locationInput = document.querySelector("#locationInput");
const weatherContainer = document.querySelector("#weatherContainer")

//https://api.openweathermap.org/data/2.5/weather?q={${locationInput.value}}&appid={${apiKey}}&units=metric

btn.onclick = () => {
    const location = locationInput.value.trim();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(weather => {
        weatherContainer.innerHTML = `
        <h2>Город - ${weather.name}</h2>
        <p>Температура: ${weather.main.temp}°C</p>
        <p>Описание: ${weather.weather[0].description}</p>
        <p>Скорость ветра: ${weather.wind.speed}м/с</p>
        `
    })
        
}