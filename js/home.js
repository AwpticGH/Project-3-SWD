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
// var toContainer = document.getElementsByClassName("container-lists")[1];
// var passContainer = document.getElementsByClassName("container-lists")[2];

function displayListsFrom() {
    fromContainer.style.display = "block";
}

var buttons = fromContainer.getElementsByClassName("btn-cities");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        document.getElementById("from-city").innerText = buttons[i].innerHTML;
        console.log("test");
    });
};

console.log(buttons)