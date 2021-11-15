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

// start with empty array
let storedPlans = [];
// if nothing returned from local, establish your default array
if (!localStorage.plans) {
    const defaultPlansArr = [ { data: '' }, { data: '' }, { data: '' }, { data: '' }, { data: '' }, { data: '' }, { data: '' }, { data: '' }, { data: '' } ];
   localStorage.setItem('plans', JSON.stringify(defaultPlansArr));
}
storedPlans = JSON.parse(localStorage.plans)


// add click event for save button
window.addEventListener("click",savePlans)

function savePlans(event) {
    // grab hour
    const hour = event.target.id
    console.log('hour',hour)
    // calculate index
    const index = event.target.id - 8;
   // grab value from relevant textarea
    // const value = document.querySelector('#hour' + hour).value;
   // store value in index of array
    storedPlans[index].data = value;
   // update local storage
    localStorage.setItem('plans', storedPlans);
 }




// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
