// let selected = false;

// function isSelected() {
//     selected = true;
//     displayInfo();
// }

// var panelLength = 2;

// function displayInfo() {
//     for (var i=1; i <= panelLength; i++) {
//         var selectedPanel[i] = document.getElementById("result-" + i);

//         if (selectedPanel[i].isSelected) {
//             if (document.getElementById("info-" + i).style.display == "none") {
//                 document.getElementById("info-" + i).style.display = "block";
//             }
        
//             else {
//                 document.getElementById("info-" + i).style.display = "none";
//             }
//         }
//     }
// }

// var selectedPanel = document.getElementsByClassName("panel body");
// var panelInfo = document.getElementsByClassName("panel-info");
// var panelLength = 2;

// for (var i = 0; i <= panelLength; i++) {
//     selectedPanel[i].addEventListener("click", displayInfo() {
//         panelInfo = document.getElementsByClassName("panel-info");
//         if (panelInfo[i].style.display == "none") {
//             panelInfo[i].style.display = "block";
//         }
//         else {
//             panelInfo[i].style.display = "none";
//         }
//     })
// }

//-----------------------
// TEMPORARY
function displayInfo1() {
    var panelBody = document.getElementById("result-1").style;
    var panelInfo = document.getElementById("info-1").style;

    if (panelInfo.display == "none") {
        panelBody.borderRadius = "10px 10px 0 0";
        panelInfo.display = "block";
    }

    else {
        panelBody.borderRadius = "10px 10px 10px 10px";
        panelInfo.display = "none";
    }
}
function displayInfo2() {
    var panelBody = document.getElementById("result-2").style;
    var panelInfo = document.getElementById("info-2").style;

    if (panelInfo.display == "none") {
        panelBody.borderRadius = "10px 10px 0 0";
        panelInfo.display = "block";
    }

    else {
        panelBody.borderRadius = "10px 10px 10px 10px";
        panelInfo.display = "none";
    }
}
//------------------------------

function changeSearch() {
    // Go Back To Previous Page
}

function flightChose() {
    document.getElementById("result-1").onclick = "";
    alert("Hello");
}

let flightInfo = {
    routeCode: "128",
    airportOfDepCode: "CGK",
    airportOfArrCode: "BDO",
    airportOfDepName: "Soekarno Hatta International Airport",
    airportOfArrName: "Husein Sastranegara International Airport",
    cityOfDeparture: "Jakarta",
    cityOfArrival: "Bandung",
    timeOfFlight: "120 M"
}

let planeInfo1 = {
    airlineName: "Garuda Indonesia",
    airlineCode: "GA",
    seatClass: "Economy",
    timeOfDeparture: "9:00 AM",
    timeOfArrival: "11:00 AM"
}

let planeInfo2 = {
    airlineName: "Lion Air",
    airlineCode: "JT",
    seatClass: "Economy",
    timeOfDeparture: "2:00 PM",
    timeOfArrival: "4:00 PM"
}

function fillFlightInfo() {
    var elementsRouteCode = document.getElementsByClassName("route-code");
    var elementsAirportOfDepCode = document.getElementsByClassName("airport-of-departure");
    var elementsAirportOfArrCode = document.getElementsByClassName("airport-of-arrival");
    var elementsAirportOfDepName = document.getElementsByClassName("airport-of-departure-name");
    var elementsAirportOfArrName = document.getElementsByClassName("airport-of-arrival-name");
    var elementsCityOfDep = document.getElementsByClassName("city-of-departure");
    var elementsCityOfArr = document.getElementsByClassName("city-of-arrival");
    var elementsTimeOfFlight = document.getElementsByClassName("time-of-flight");

    for (var i = 0; i < elementsRouteCode.length; i++) {
        elementsRouteCode[i].innerHTML = flightInfo.routeCode;
    }
    for (var i = 0; i < elementsAirportOfDepCode.length; i++) {
        elementsAirportOfDepCode[i].innerHTML = flightInfo.airportOfDepCode;
    }
    for (var i = 0; i < elementsAirportOfArrCode.length; i++) {
        elementsAirportOfArrCode[i].innerHTML = flightInfo.airportOfArrCode;
    }
    for (var i = 0; i < elementsAirportOfDepName.length; i++) {
        elementsAirportOfDepName[i].innerHTML = flightInfo.airportOfDepName;
    }
    for (var i = 0; i < elementsAirportOfArrName.length; i++) {
        elementsAirportOfArrName[i].innerHTML = flightInfo.airportOfArrName;
    }
    for (var i = 0; i < elementsCityOfDep.length; i++) {
        elementsCityOfDep[i].innerHTML = flightInfo.cityOfDeparture;
    }
    for (var i = 0; i < elementsCityOfArr.length; i++) {
        elementsCityOfArr[i].innerHTML = flightInfo.cityOfArrival;
    }
    for (var i = 0; i < elementsTimeOfFlight.length; i++) {
        elementsTimeOfFlight[i].innerHTML = flightInfo.timeOfFlight;
    }
}

function fillPlaneInfo(i, planeInfo) {
    if (i == 1) {
        var elementsAirlineName = document.getElementsByClassName("airline-name-1");
        var elementsAirlineCode = document.getElementsByClassName("airline-code-1");
        var elementsTimeOfDep = document.getElementsByClassName("time-of-departure-1");
        var elementsTimeofArr = document.getElementsByClassName("time-of-arrival-1");
        var elementsSeatClass = document.getElementsByClassName("seat-class");
    }
    else if (i == 2) {
        var elementsAirlineName = document.getElementsByClassName("airline-name-2");
        var elementsAirlineCode = document.getElementsByClassName("airline-code-2");
        var elementsTimeOfDep = document.getElementsByClassName("time-of-departure-2");
        var elementsTimeofArr = document.getElementsByClassName("time-of-arrival-2");
        var elementsSeatClass = document.getElementsByClassName("seat-class");
    }

    for (var i = 0; i < elementsAirlineName.length; i++) {
        elementsAirlineName[i].innerHTML = planeInfo.airlineName;
    }
    for (var i = 0; i < elementsAirlineCode.length; i++) {
        elementsAirlineCode[i].innerHTML = planeInfo.airlineCode;
    }
    for (var i = 0; i < elementsTimeOfDep.length; i++) {
        elementsTimeOfDep[i].innerHTML = planeInfo.timeOfDeparture;
    }
    for (var i = 0; i < elementsTimeofArr.length; i++) {
        elementsTimeofArr[i].innerHTML = planeInfo.timeOfArrival;
    }
    for (var i = 0; i < elementsSeatClass.length; i++) {
        elementsSeatClass[i].innerHTML = planeInfo.seatClass;
    }
}

function test() {
    console.log("test");

    document.getElementsByClassName("airline-name-1").innerHTML = "Sriwijaya Air";

    console.log("test2");
}