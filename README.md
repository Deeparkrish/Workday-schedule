# Workday-schedule
 A simple calendar application that allows a user to save events for each hour of the day.
 This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.



The following have been incorporated in this project :

* When the user opens the planner the current day is displayed at the top of the calendar. I have used Moment.js library to show the day and time.
* A starter code uses the Moment.js (Links to an external site.) library to work with date and time has been provided,  The library has been used 
  to display the date and time.
* As the user scrolls down he is presented with time blocks for standard business hours, which is 8am -5pm. 
  This display has been incorportated in HTML by using bootstrap grid system powered by css.
* Eahc time -block, has the following : 1. The time that it represents on the left  2. A text area to enter and save an event 
  3. A save button to the right of text-area, which has a save-icon from fonatawesome style-sheet provided in starter code.
* Each time-block is associated with an id, the breifly depics the time range that it shows. 
  Example: id =hour-10, is the id for the timeblock between 10-11.
* Each time block is color-coded to indicate whether it is in the past(gray), present(red), or future(green). 
  This is incorporated by comparing the current time (moment()),with the id of each time block. Color codes on set based on if the    current time is past, 
  or is the same or if its less than the time in the time block.
* The text boxes of the time blocks whose times have already past current time are disabled, as you cannot plan for the time that has already passed.
* When the user clicks into a time block(that's  color-coded red /green, he can enter an event.
* When the user clicks the save button for that time block the text for that event is saved in local storage for persistance,
 using web-APIs. 
* At the local storage, the id of each time block is saved as key, and the event the user entered is stored as value.
* When the page  is refreshed the the saved events persist.The events are displayed using localstorage.getItem()API.
* When the user reloads the planner the next day, the local storage is cleared(previous day events) and he is all set to enter the events for that day.

![Webpage](https://github.com/Deeparkrish/Workday-schedule/blob/main/assets/img/pseudo2.jpeg)
![Webpage](https://github.com/Deeparkrish/Workday-schedule/blob/main/assets/img/psuedo1.jpeg)


![Webpage](https://github.com/Deeparkrish/Workday-schedule/blob/main/assets/img/planner.jpeg)

![Webpage](https://github.com/Deeparkrish/Workday-schedule/blob/main/assets/img/local%20storage.png)


## Built With
* HTML
* CSS
* Bootstrap
* Web APIs 
* JQuery

## Website
https://deeparkrish.github.io/Workday-schedule/

## Contribution
Made with ❤️ by [Deepa Krishnan]

