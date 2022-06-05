// function displayInfo() {
//     var i = 0;
//     var panelLength = 2;

//     for (i=1; i <= panelLength; i++) {
        
//     }

//     if (document.getElementById("info-1").style.display == "none") {
//         document.getElementById("info-1").style.display = "block";
//     }

//     else {
//         document.getElementById("info-1").style.display = "none";
//     }

//     if (document.getElementById("info-2").style.display == "none") {
//         document.getElementById("info-2").style.display = "block";
//     }

//     else {
//         document.getElementById("info-2").style.display = "none";
//     }
// }

//-----------------------
// TEMPORARY
function displayInfo1() {
    var i = 0;
    var panelLength = 2;

    for (i=1; i <= panelLength; i++) {
        
    }

    if (document.getElementById("info-1").style.display == "none") {
        document.getElementById("info-1").style.display = "block";
    }

    else {
        document.getElementById("info-1").style.display = "none";
    }
}
function displayInfo2() {
    var i = 0;
    var panelLength = 2;

    for (i=1; i <= panelLength; i++) {
        
    }

    if (document.getElementById("info-2").style.display == "none") {
        document.getElementById("info-2").style.display = "block";
    }

    else {
        document.getElementById("info-2").style.display = "none";
    }
}
//------------------------------

function changeSearch() {
    // Go Back To Previous Page
}

function flightChose() {
    document.getElementById("result-1").onclick = "";
    alert("Hello")
}

let flightInfo = {
    flightID : "1",
    airlineName : "Garuda Indonesia",
    timeOfDeparture : "9:00 AM",
    timeOfFlight : "120 M",
    timeOfArrival : "11 AM",
    airportOfDeparture : "CGK",
    airportOfArrival : "BDO",
    cityOfDeparture : "Surabaya",
    cityOfArrival : "Bandung"
}

const userInfo = {
    ID,
    email,
    password,
    name,
    dateOfBirth,
    gender,
    title,
    phoneNumber
}

function fillFlightInfo(flightInfo) {
    document.getElementById("airline-name").innerHTML = flightInfo.airlineName;
    document.getElementById("time-of-departure").innerHTML = flightInfo.timeOfDeparture;
    document.getElementById("time-of-flight").innerHTML = flightInfo.timeOfFlight;
    document.getElementById("time-of-arrival").innerHTML = flightInfo.timeOfArrival;
    document.getElementById("airport-of-departure").innerHTML = flightInfo.airportOfDeparture;
    document.getElementById("airport-of-arrival").innerHTML = flightInfo.airportOfArrival;
    document.getElementById("city-of-departure").innerHTML = flightInfo.cityOfDeparture;
    document.getElementById("city-of-arrival").innerHTML = flightInfo.cityOfArrival;
}

fillFlightInfo(flightInfo);