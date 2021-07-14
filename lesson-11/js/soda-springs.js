const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
 
 .then(function (jsonObject) {
   const town = jsonObject['towns'];
   for (let i = 0; i < town.length; i++ ) {
       if (town[i].name == 'Soda Springs') {
            let events = town[i].events;
        for (let i = 0; i < events.length; i++) {
            let event = document.createElement('h3');
            event.innerHTML = events[i];
            document.querySelector('div.events').appendChild(event);
            }
        }
   }
});

function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
  }

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

if (dt.getDay() == 5) {
    document.getElementById("friday-announcement").style.display = "block"
} else {
    document.getElementById("friday-announcement").style.display = "none"
}