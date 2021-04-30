// main selector 
let input = document.querySelector("input");
let button = document.querySelector("button");
let popup = document.querySelector(".popup");
let getIp = document.querySelector(".ip");
let getLocations = document.querySelector(".location");
let getTimezone = document.querySelector(".timezone");
let getIsp = document.querySelector(".isp");

button.addEventListener("click", function (e) {
    e.preventDefault();
    getInfo();
})



// function to get information user
function getInfo() {
    if (input.value == "") {
        popup.classList.add("show-popup");
        setTimeout(function () {
            popup.classList.remove("show-popup");
        }, 2000);


    }
    else {
        fetch(`http://ip-api.com/json/${input.value}`)
            .then(response => response.json())
            .then(data => {
                document.querySelector("header").classList.add("animation-header");
                setTimeout(function () {
                    document.querySelector(".container-info").style.animation = "info .3s ease forwards";

                }, 500)
                setTimeout(function () {

                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                        maxZoom: 20,
                        tileSize: 512,
                        zoomOffset: -1,
                        accessToken: 'your.mapbox.access.token'
                    }).addTo(mymap);
                    var marker = L.marker([latDate, lonDate]).addTo(mymap);

                }, 1000)

                // emptyInfoVar(); in the future

                let ip = data.query;
                let locations = `${data.country} <br> ${data.city} ${data.countryCode}`;
                let timeZone = data.timezone;
                let isp = data.isp;

                // append text in document
                getIp.innerHTML = ip;
                getLocations.innerHTML = locations;
                getTimezone.innerHTML = timeZone;
                getIsp.innerHTML = isp;

                //create var to change map


                // emptyMapVar(); in future
                lonDate = data.lon;
                latDate = data.lat;
                var mymap = L.map('mapid').setView([latDate, lonDate], 17);

            })
    }

}





// < in the future >

// function emptyInfoVar() {
//     ip = "";
//     locations = "";
//     timezone = "";
//     isp = "";
// }

// function emptyMapVar() {
//     lonDate = 0;
//     latDate = 0;
// }

