var currentDayEl = document.querySelector("#currentDay");
var today = moment().format('dddd, MMMM Do YYYY');// get today's datev

// add the current day and date to the header
currentDayEl.innerHTML =today;

// Track the status of tasks
var Timetracker = function(){
    //current time 
    var timeNow = moment().hour();
    timeNow =parseInt(timeNow);

    $(".time-block").each(function(){    
    // time of task 
    var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
    
   
    if(blockTime<8) {
        blockTime+=12;
    }
        if (blockTime>timeNow)
        {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            //console.log(this);

        }
        else if (blockTime<timeNow ){
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
            //console.log(this);

        }
        else if (blockTime===timeNow){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
            //console.log(this);
        }
        
    });


}


$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
});
Timetracker();

// $("#hour17 .description").val(localStorage.getItem("hour17"));
