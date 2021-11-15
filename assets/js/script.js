// display current day at the top of the planner
const currentDayEl = $('#currentDay');
currentDayEl.text(moment().format('dddd, MMM Do, YYYY'));

// time blocks
var timeBlocks = $(".hour");
var now = parseInt(moment().format("H"));

// function to show the past, present, or future 
$.each(timeBlocks, function (i, hour) {
    var timeId = parseInt($(this).attr("id"));
    if (timeId === now) {
      $(this).next().addClass("present");
    } else if (timeId < now) {
      $(this).next().addClass("past");
    } else if (timeId > now) {
      $(this).next().addClass("future");
    }
  });

//  save events to local storage 
var plans = ["eightAm", "nineAm", "tenAm", "elevenAm", "twelvePm", "onePm", "twoPm", "threePm", "fourPm", "fivePm"];
localStorage.setItem("plans", JSON.stringify(plans));

var storedPlans = JSON.parse(localStorage.getItem("plans"));

// retrieve stored items
window.localStorage.getItem('plans');
console.log(plans)

// add click event for save button
window.addEventListener("click", plans)





// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
