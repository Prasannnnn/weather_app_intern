async function getweather() {
    const city = document.getElementById("cityInput").value;
    const apikey = "cb18cf76330e4e7af6389bbd27b71072";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}` 

    try {
        const response = await fetch(url)
        if (!response.ok){
            throw new Error("city was not found")
        }
        const data = await response.json()
        displayweather(data)
    } catch (error) {
        document.getElementById("weatherResult").innerHTML=`<p style="color:red">${error.message}</p>`
    }
}

function displayweather(data){
    const weatherhtml = `<h2>${data.name},${data.sys.country}</h2>
                        <h3>${data.main.temp} C </h3>
                        <p> ${data.weather[0].description}
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png alt="weather icon">
                        <p>wind speed:${data.wind.speed} m/s</p> 
                        `;
    document.getElementById('weatherResult').innerHTML=weatherhtml
}