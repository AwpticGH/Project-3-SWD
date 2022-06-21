const searchContainer = document.getElementsByClassName("search-box");
const homePage = document.querySelectorAll("*");

function focusOnSearchBox() {
   
    if (document.activeElement == searchContainer) {
        console.log("true");
    }
}

var fromContainer = document.getElementById("from-city-list");
var toContainer = document.getElementById("to-city-list");
var passContainer = document.getElementById("passenger-list");

function displayListsFrom() {
    fromContainer.style.display = "block";
    document.getElementsByTagName("*").onclick = function() {
        if (fromContainer.style.display == "block") {
            fromContainer.style.display = "none";
        }
        if (toContainer.style.display == "block") {
            toContainer.style.display = "none";
        }
        if (passContainer.style.display == "block") {
            passContainer.style.display = "none";
        }
        console.log("blah")
    }
}
function displayListsTo() {
    toContainer.style.display = "block";
}
function displayListsPass() {
    passContainer.style.display = "block";
}

var btnFromCity = document.querySelectorAll('.btn-cities-from');
var btnToCity = document.querySelectorAll(".btn-cities-to");
var departDate = document.getElementById("departure-date");
var returnDate = document.getElementById("return-date");

btnFromCity.forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("from-city").value = button.innerHTML;
        fromContainer.style.display = "none";
        if (document.getElementById("to-city").value == "") {
            displayListsTo();
        }
        else {
            departDate.click;
        }
    });
})
btnToCity.forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("to-city").value = button.innerHTML;
        toContainer.style.display = "none";
        if (document.getElementById("from-city").value == "") {
            displayListsFrom();
            console.log(document.getElementById("departure-date"))
        }
        else {
            departDate.click;
            console.log(departDate);
        }
    })
})

departDate.valueAsDate = new Date();
// setup for return date
var date = new Date();
var day = date.getDate() + 1;
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) {
    month = "0" + month;
}
if (day < 10) {
    day = "0" + day;
}
var tomorrow = year + "-" + month + "-" + day;
returnDate.value = tomorrow;

// slideshow
const image = ["Images/Airline_ads(1).jpg", "Images/Airline_ads(2).jpg", "Images/Airline_ads(3).jpg", "Images/Airline_ads(4).jpg", "Images/Airline_ads(5).jpg"];
var slideImg = document.getElementsByClassName("slideshow-img");
var slide1 = 0;
var slide2 = 1;
var slide3 = 2;

function slideshowAds() {
    if (slide3 > (image.length - 1)) {
        slide3 = 0;
    }
    if (slide2 > (image.length - 1)) {
        slide2 = 0;
    }
    if (slide1 > (image.length - 1)) {
        slide1 = 0;
    }

    slideImg[0].src = image[slide1];
    slideImg[1].src = image[slide2];
    slideImg[2].src = image[slide3];
    slide1++;
    slide2++;
    slide3++;
    setTimeout(slideshowAds, 3000);
}

slideshowAds();

// return date checked
function returnFlight() {
    if (document.getElementById("return-date-check").checked) {
        returnDate.disabled = false;
        if (returnDate.value != tomorrow) {
            displayListsPass();
        }
    }
    else {
        returnDate.disabled = true;
    }
}

var passCount = 1;
var seatClass = "Economy";
var textGroup;

btnDecrease = document.getElementById("passenger-count").querySelectorAll(".btn-decrease");
btnIncrease = document.getElementById("passenger-count").querySelectorAll(".btn-increase");

btnDecrease.forEach(button => {
    button.addEventListener("click", function() {
        if (passCount > 1) {
            passCount--;
            if (passCount == 1) {
                textGroup = passCount + " Passenger, " + seatClass;
            }
            else {
                textGroup = passCount + " Passengers, " + seatClass;
            }
            document.getElementById("passenger-seat-class").value = textGroup;
        }
    })
})
btnIncrease.forEach(button => {
    button.addEventListener("click", function() {
        if (passCount < 5) {
            passCount++;
            textGroup = passCount + " Passengers, " + seatClass;
        }
        document.getElementById("passenger-seat-class").value = textGroup;
    })
})

btnSeatClass = document.querySelectorAll(".seat-class-list");

btnSeatClass.forEach(button => {
    button.addEventListener("click", function() {
        seatClass = button.innerHTML;
        if (passCount == 1) {
            textGroup = passCount + " Passenger, " + seatClass;
        }
        else {
            textGroup = passCount + " Passengers, " + seatClass;
        }
        document.getElementById("passenger-seat-class").value = textGroup;
    })
})

function resetPassSeatClass() {
    passCount = 1;
    seatClass = "Economy";
    document.getElementById("passenger-seat-class").value = "1 Passenger, Economy";
}

function submitPassSeatClass() {
    passContainer.style.display = "none";
}

// Konsul 1
function hideContainers() {
    if (fromContainer.style.display == "block") {
        fromContainer.style.display = "none";
    }
    if (toContainer.style.display == "block") {
        toContainer.style.display = "none";
    }
    if (passContainer.style.display == "block") {
        passContainer.style.display = "none";
    }
}