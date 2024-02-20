let clearButton = document.getElementById("clearBtn");

clearButton.addEventListener("click", function(){
    localStorage.clear()
    window.location.reload()
});






$(function () {
 
//Selecting text input ids using jquery
    let text9Input = $("#text9");
    let text10Input = $("#text10");
    let text11Input = $("#text11");
    let text12Input = $("#text12");
    let text1Input = $("#text1");
    let text2Input = $("#text2");
    let text3Input = $("#text3");
    let text4Input = $("#text4");
    let text5Input = $("#text5");
    
// Setting text area values on page load from local storage values
    $(document).ready(function() {
        text9Input.val(localStorage.getItem("nineOClock"));
        text10Input.val(localStorage.getItem("tenOClock"));
        text11Input.val(localStorage.getItem("elevenOClock"));
        text12Input.val(localStorage.getItem("twelveOClock"));
        text1Input.val(localStorage.getItem("oneOClock"));
        text2Input.val(localStorage.getItem("twoOClock"));
        text3Input.val(localStorage.getItem("threeOClock"));
        text4Input.val(localStorage.getItem("fourOClock"));
        text5Input.val(localStorage.getItem("fiveOClock"));

    })

// Declaring functions to save user inputs with separate local storage keys
    function saveInput9() {
        localStorage.setItem("nineOClock", text9Input.val());
    }
    function saveInput10() {
        localStorage.setItem("tenOClock", text10Input.val());
    }
    function saveInput11(){
        localStorage.setItem("elevenOClock", text11Input.val());
    }
    function saveInput12() {
        localStorage.setItem("twelveOClock", text12Input.val());
    }
    function saveInput1() {
        localStorage.setItem("oneOClock", text1Input.val());
    }
    function saveInput2() {
        localStorage.setItem("twoOClock", text2Input.val());
    }
    function saveInput3() {
        localStorage.setItem("threeOClock", text3Input.val());
    }
    function saveInput4() {
        localStorage.setItem("fourOClock", text4Input.val());
    }
    function saveInput5() {
        localStorage.setItem("fiveOClock", text5Input.val());
    }

//Function to save all text area input data at once    
    function saveAllInputs(){
        localStorage.setItem("nineOClock", text9Input.val());
        localStorage.setItem("tenOClock", text10Input.val());
        localStorage.setItem("elevenOClock", text11Input.val());
        localStorage.setItem("twelveOClock", text12Input.val());
        localStorage.setItem("oneOClock", text1Input.val());
        localStorage.setItem("twoOClock", text2Input.val());
        localStorage.setItem("threeOClock", text3Input.val());
        localStorage.setItem("fourOClock", text4Input.val());
        localStorage.setItem("fiveOClock", text5Input.val());
    }

// Event listeners for hourly buttons to save user inputs
    button9.addEventListener("click", saveInput9);
    button10.addEventListener("click", saveInput10);
    button11.addEventListener("click", saveInput11);
    button12.addEventListener("click", saveInput12);
    button1.addEventListener("click", saveInput1);
    button2.addEventListener("click", saveInput2);
    button3.addEventListener("click", saveInput3);
    button4.addEventListener("click", saveInput4);
    button5.addEventListener("click", saveInput5);

// Event listener for save all button    
    saveAllBtn.addEventListener("click", saveAllInputs);
  

//Getting individual rows by ID and assigning to JS variable
    let hourNine = document.getElementById("hour9");
    let hourTen = document.getElementById("hour10");
    let hourEleven = document.getElementById("hour11");
    let hourTwelve = document.getElementById("hour12");
    let hourOne = document.getElementById("hour1");
    let hourTwo = document.getElementById("hour2");
    let hourThree = document.getElementById("hour3");
    let hourFour = document.getElementById("hour4");
    let hourFive = document.getElementById("hour5");

    
 // Using Dayjs to display the current date in the header of the page.
    let today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY, h:mm:ss a'));

//Getting current hour of the user using day.js and assigning to a variable
    let currentHour = dayjs().hour()

//If statements used to alster classes of rows based on current hour of the user
    if (currentHour >= 9 && currentHour < 10) {
        hourNine.setAttribute("class", "hourRow present")
    }
    if (currentHour >=10 && currentHour < 11) {
        hourNine.setAttribute("class", "hourRow past")
        hourTen.setAttribute("class", "hourRow present")
    }
    if (currentHour >=11 && currentHour < 12) {
        hourNine.setAttribute("class", "hourRow past")
        hourTen.setAttribute("class", "hourRow past")
        hourEleven.setAttribute("class", "hourRow present")
    }
    if (currentHour >=12 && currentHour < 13) {
        hourNine.setAttribute("class", "hourRow past")
        hourTen.setAttribute("class", "hourRow past")
        hourEleven.setAttribute("class", "hourRow past")
        hourTwelve.setAttribute("class", "hourRow present")
    }
    if (currentHour >=13 && currentHour < 14) {
        hourNine.setAttribute("class", "hourRow past")
        hourTen.setAttribute("class", "hourRow past")
        hourEleven.setAttribute("class", "hourRow past")
        hourTwelve.setAttribute("class", "hourRow past")
        hourOne.setAttribute("class", "hourRow present")
    }
    if (currentHour >=14 && currentHour < 15) {
        hourNine.setAttribute("class", "hourRow past")
        hourTen.setAttribute("class", "hourRow past")
        hourEleven.setAttribute("class", "hourRow past")
        hourTwelve.setAttribute("class", "hourRow past")
        hourOne.setAttribute("class", "hourRow past")
        hourTwo.setAttribute("class", "hourRow present")
    }
    if (currentHour >=15 && currentHour < 16) {
        hourNine.setAttribute("class", "hourRow past")
        hourTen.setAttribute("class", "hourRow past")
        hourEleven.setAttribute("class", "hourRow past")
        hourTwelve.setAttribute("class", "hourRow past")
        hourOne.setAttribute("class", "hourRow past")
        hourTwo.setAttribute("class", "hourRow past")
        hourThree.setAttribute("class", "hourRow present")
    }
    if (currentHour >=16 && currentHour < 17) {
        hourNine.setAttribute("class", "hourRow past")
        hourTen.setAttribute("class", "hourRow past")
        hourEleven.setAttribute("class", "hourRow past")
        hourTwelve.setAttribute("class", "hourRow past")
        hourOne.setAttribute("class", "hourRow past")
        hourTwo.setAttribute("class", "hourRow past")
        hourThree.setAttribute("class", "hourRow past")
        hourFour.setAttribute("class", "hourRow present")
    }
    if (currentHour >=17 && currentHour < 18) {
        hourNine.setAttribute("class", "hourRow past")
        hourTen.setAttribute("class", "hourRow past")
        hourEleven.setAttribute("class", "hourRow past")
        hourTwelve.setAttribute("class", "hourRow past")
        hourOne.setAttribute("class", "hourRow past")
        hourTwo.setAttribute("class", "hourRow past")
        hourThree.setAttribute("class", "hourRow past")
        hourFour.setAttribute("class", "hourRow past")
        hourFive.setAttribute("class", "hourRow present")
    }
    if (currentHour >=18 && currentHour < 24) {
        hourNine.setAttribute("class", "hourRow past")
        hourTen.setAttribute("class", "hourRow past")
        hourEleven.setAttribute("class", "hourRow past")
        hourTwelve.setAttribute("class", "hourRow past")
        hourOne.setAttribute("class", "hourRow past")
        hourTwo.setAttribute("class", "hourRow past")
        hourThree.setAttribute("class", "hourRow past")
        hourFour.setAttribute("class", "hourRow past")
        hourFive.setAttribute("class", "hourRow past")
    }

  });