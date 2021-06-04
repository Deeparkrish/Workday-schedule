var currentDayEl = document.querySelector("#currentDay");
var today = moment().format('dddd, MMMM Do YYYY');

// add the current day and date to the header
currentDayEl.innerHTML =today;




