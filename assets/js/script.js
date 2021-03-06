//setting today's date in the header 
// get today's date
var today = moment().format('LLLL');
// add the current day and date to the header
$("#currentDay").text(today);

// get time in date format
//This is to store the date in local storage of testing purpose  
var thisDate = moment().format('MM/DD/YY');


// Track the status of event items in the schedule
var Timetracker = function(){
// getthe hour of current time 
var timeNow = moment().hour();
timeNow =parseInt(timeNow);

   
 //color-code the timeblocks 
$(".time-block").each(function(){    
    // time of event 
    var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
        
    //add 12hrs to block time if block times are between 1-5pm.
    if(blockTime<6) {
        blockTime+=12;
    }
    // check if the eventtime is greater than current time 
    // the event time is about to happen in future 
    if (blockTime>timeNow)
        {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            //change backround to green
        }
        //check if the eventtime is less than current time 
        // Its past the event time 
        else if (blockTime<timeNow ){
            $(this).removeClass("present");
            $(this).removeClass("future");
             //change backround to gray
            $(this).addClass("past");
            //disable the text area and button you cannot edit as the time passed already
            $(this).find("textarea").attr("disabled",true);
            $(this).find("button").attr("disabled",true);
           
        }
        // Check if the event time is in the urrent time window
        else if (blockTime===timeNow){
            $(this).removeClass("past");
            $(this).removeClass("future");
            //change backround to red
            $(this).addClass("present");           
        }       
    });
    return;
}

//Save button eventlistener 
$(".saveBtn").on("click", function () {
    // Get values of the description in JQuery
    var text = $(this).siblings(".description").val().trim();
    var time = $(this).parent().attr("id");

    // Save event in local storage
    localStorage.setItem(time, text);
});

// load the saved  schedule 
var loadCalendar = function(){
var lastaccessedtimeStamp =localStorage.getItem("lastaccessedtime");

// Check if  its not the current day 
if(thisDate!= lastaccessedtimeStamp){
    
    //Clear events  to keep planner ready for next day 
    clearEvents();
    
}
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));
return;
};

// Clear storage for the next day 
var clearEvents =function(){

    // clean up local storage 
    localStorage.clear();          
    return;
}

//load current schedule 
loadCalendar();
// Track the status of each event item in the planner 
Timetracker();
//save the last accessed time , in local storage  . 
// This is used for comparing and making sure that the local storage is cleared when  the user accesses the next day .
localStorage.setItem("lastaccessedtime",thisDate);
