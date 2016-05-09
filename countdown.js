// set the date we're counting down to

var date = "Oct 19, 2016";

var target_date = new Date(date).getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById("countdown");
 
makeCountdown();//einmal am anfang damit es nicht erst nach einer secunde auftaugt
 
 
 
 
// update the tag with id "countdown" every 1 second
setInterval(function () 
{
	makeCountdown();  
}, 1000);








function makeCountdown()
{
// find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = days + "d, " + hours + "h, "
    + minutes + "m, " + seconds + "s"+ " until "+date+".";  
}