'use strict';
const weatherData = {
  tempUnit: "c",
  windSpeedUnit: "m/s",
  week: [
    {
      day: "Mon",
      temp: 22,
      windDirection: "north-east",
      windSpeed: 10,
      type: "sunny"
    },
    {
      day: "Tue",
      temp: 14,
      windDirection: "north-west",
      windSpeed: 14,
      type: "rainy"
    },
    {
      day: "Wed",
      temp: 17,
      windDirection: "south-east",
      windSpeed: 20,
      type: "cloudy"
    },
    {
      day: "Thu",
      temp: 17,
      windDirection: "south-east",
      windSpeed: 20,
      type: "sunny"
    },
    {
      day: "Fri",
      temp: 17,
      windDirection: "south-east",
      windSpeed: 20,
      type: "cloudy"
    },
    {
      day: "Sat",
      temp: 17,
      windDirection: "north-west",
      windSpeed: 20,
      type: "cloudy"
    },
    {
      day: "Sun",
      temp: 17,
      windDirection: "south-east",
      windSpeed: 20,
      type: "rainy"
    }
  ]
};

let element = document.getElementById("main"),
  dayInWeek = document.getElementsByClassName("dayInWeek")[0],
  wetherIcon = document.getElementsByClassName("wetherIcon")[0],
  temperature = document.getElementsByClassName("temperature")[0],
  windSpeeds = document.getElementsByClassName("windSpeed")[0],
  windDirections = document.getElementsByClassName("windDirections")[0],
  modal = document.getElementById("modal-content"),
  close = document.getElementsByClassName("close")[0];

weatherData.week.forEach(day => {
  let eachDay = document.createElement("li");
  eachDay.classList.add(day.day);

  eachDay.addEventListener("click", function() {
  	windArrow(day.windDirection);
  	openModal(day.day, day.type, day.temp, day.windSpeed, day.windDirection);
  });
  
  eachDay.innerHTML = `<span class='day'>${day.day}</span><span class='temp'>${
    day.temp
  }</span>`;
  element.appendChild(eachDay);
});

function windArrow(direction) {
  if (direction === "north-east") {
    windDirections.classList.add("north-east");
  } else {
    windDirections.classList.add("south-east");
  }
}

function openModal(day, type, temp, windSpeed, windDirection) {
 	dayInWeek.innerText = day;
  wetherIcon.innerText = type;
  temperature.innerText = temp;
  windSpeeds.innerText = windSpeed;
  windDirections.innerText = windDirection;
  modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == close) {
        modal.style.display = "none";
    }
}