const weatherData = {
	tempUnit: 'c',
	windSpeedUnit: 'm/s',
	week: [
	{ day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10, type: 'sunny' },
	{ day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy' },
	{ day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
	{ day: 'Thu', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'sunny' },
	{ day: 'Fri', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
	{ day: 'Sat', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
	{ day: 'Sun', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'rainy' }
	]
}



let element = document.getElementById('main');


weatherData.week.forEach(day => {
	let eachDay = document.createElement("li");
	eachDay.classList.add(day.day);
	eachDay.addEventListener('click', function () {
		let dayInWeek = document.getElementsByClassName('dayInWeek'),
    wetherIcon = document.getElementsByClassName('wetherIcon'),
    temperature = document.getElementsByClassName('temperature'),
    windSpeed = document.getElementsByClassName('windSpeed'),
    windDirections = document.getElementsByClassName('windDirections');

    dayInWeek.innerText = day.day;
    wetherIcon.innerText = day.temp;
    temperature.innerText = day.windDirection;
    windSpeed.innerText = day.windSpeed;
    windDirections.innerText = day.type;

    console.log(dayInWeek, wetherIcon, windDirections);
	});
	eachDay.innerHTML = `<span class='day'>${day.day}</span><span class='temp'>${day.temp}</span>`;
	element.appendChild(eachDay);
});
