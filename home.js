const searchContainer = document.getElementsByClassName("search-box");
const homePage = document.getElementsByTagName("body");

function focusOnSearchBox() {
    for (var i = 0; i < homePage.length; i++) {
        homePage[i].style.filter = "brightness(0.5)";
    }
    for (var i = 0; i < searchContainer.length; i++) {
        searchContainer[i].style.filter = "brightness(1)";
    }
}

var fromContainer = document.getElementsByClassName("container-lists")[0];
var toContainer = document.getElementsByClassName("container-lists")[1];
// var passContainer = document.getElementsByClassName("container-lists")[2];

function displayListsFrom() {
    fromContainer.style.display = "block";
}
function displayListsTo() {
    toContainer.style.display = "block";
}
function dislpayListsPass() {
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