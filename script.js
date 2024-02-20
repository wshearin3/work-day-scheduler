// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let clearButton = document.getElementById("clearBtn");

clearButton.addEventListener("click", function(){
    localStorage.clear()
    window.location.reload()
});






$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

//Selecting text input ids using jquery
    let text9Input = $("#text9");
    let text10Input = $("#text10");
    let text11Input = $("#text11");
    let text12Input = $("#text12");
    
// Setting text area values on page load from local storage values
    $(document).ready(function() {
        text9Input.val(localStorage.getItem("nineOClock"));
        text10Input.val(localStorage.getItem("tenOClock"));
        text11Input.val(localStorage.getItem("elevenOClock"));
        text12Input.val(localStorage.getItem("twelveOClock"));
    })

// Declaring function to save user inputs with separate local storage keys
    function saveInputs() {
        localStorage.setItem("nineOClock", text9Input.val());
        localStorage.setItem("tenOClock", text10Input.val());
        localStorage.setItem("elevenOClock", text11Input.val());
        localStorage.setItem("twelveOClock", text12Input.val());
    }
// Adding event listeners for hourly buttons to save user inputs
    button9.addEventListener("click", saveInputs);
    button10.addEventListener("click", saveInputs);
    button11.addEventListener("click", saveInputs);
    button12.addEventListener("click", saveInputs);



    // let hourNineBtn = document.getElementById("button9");
    // let hour9Text = document.getElementById("text9");
    
    

    // hourNineBtn.addEventListener("click", function(){
    //    var inputText9 = $("#text9");
    //     localStorage.setItem("nineTextInput", hour9Text.val());
        
               
    //     console.log("nineTextInput");
        
    // });

    

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    let hourNine = document.getElementById("hour9");
    let hourTen = document.getElementById("hour10");
    let hourEleven = document.getElementById("hour11");
    let hourTwelve = document.getElementById("hour12");
    let hourOne = document.getElementById("hour1");
    let hourTwo = document.getElementById("hour2");
    let hourThree = document.getElementById("hour3");
    let hourFour = document.getElementById("hour4");
    let hourFive = document.getElementById("hour5");
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

   


    //
    // TODO: Add code to display the current date in the header of the page.
    let today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY, h:mm:ss a'));
  });