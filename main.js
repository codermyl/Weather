const input = document.querySelector('.search')
const city = document.querySelector('.city')
const time = document.querySelector('.time')
const temperature = document.querySelector('.temp')
const shortDesc = document.querySelector('.desc')
const visibility = document.querySelector('.visibility p')
const wind = document.querySelector('.wind p')
const sun = document.querySelector('.sun p')

function changeWeatherUI(weather) {
	

	city.innerHTML = weather.name + ', ' + weather.sys.country
	setInterval(getTime, 1000)
	shortDesc.innerHTML = weather.weather[0].main

	const temp = Math.round(weather.main.temp)
	temperature.innerHTML = temp + ' <sup>o</sup>C'

	if (temp < 10)
    document.body.className = 'winter'
    else if (temp < 21)
    document.body.className = 'spring'
    else if (temp < 27)
    document.body.className = 'autumn'
    else
    document.body.className = 'summer'
    

	visibility.innerHTML = weather.visibility + ' (m)'
	wind.innerHTML = weather.wind.speed + ' (m/s)'
	sun.innerHTML = weather.clouds.all + ' (%)'
}

function getTime () {
    time.innerHTML = new Date().toLocaleString()
}


input.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		
        getWeather(e.target.value)
	}
})

async function getWeather(input) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

	const res = await fetch(url)
	const weather = await res.json()
    console.log('hi')
	changeWeatherUI(weather)
}

getWeather('hung yen')
