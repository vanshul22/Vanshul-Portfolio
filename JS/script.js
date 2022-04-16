/*
Website Name - PortFolio
Name : Vanshul Kesharwani
Date : 11/04/2022
Version : 6.5.2
Email : vkvanshulkesharwani54@gmail.com
Description : My portFolio.
*/
// Function to open menu
function openMenu() {
    document.getElementById("navLi").style.left = "0%";
};
// Function to close menu
function closeMenu() {
    document.getElementById("navLi").style.left = "-70%";
};


// Added Current time from this function.

function updateClock() {
    // Taking current time here
    let currentTime = new Date();

    // Taking all hour, minute and second in different2 variables.
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Fixing Minutes and hours and seconds if time is less than 10 then we will add 0 in front of it.
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // For AM/PM 
    let timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Fixing time from railway to 12 hour format.
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Creating string of current time by 3 vars.
    let currentTimeStr = `${currentHours}:${currentMinutes}:${currentSeconds} ${timeOfDay}`;

    // Showing current time in DOM.
    document.getElementById("headerRight").innerText = currentTimeStr;
};

// Calling Function in every 10 mili second
setInterval(() => {
    updateClock()
}, 1000);