const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];

        const fishHaven = towns.filter(
            (town) =>
            town.name == "Fish Haven"
            );

        fishHaven.forEach((town) => {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3First = document.createElement('h3');
            let h3Second = document.createElement('h3');
            let h3Third = document.createElement('h3');
            let h3Fourth = document.createElement('h3');

            h2.textContent = 'Upcoming Events:';
            h3First.textContent = `${town.events[0]}`;
            h3Second.textContent = `${town.events[1]}`;
            h3Third.textContent = `${town.events[2]}`;
            h3Fourth.textContent = `${town.events[3]}`;

            card.setAttribute("class", "events");
            div.setAttribute("class", "event-title");

            card.appendChild(div1);
            div.appendChild(h2);
            card.appendChild(h3First);
            card.appendChild(h3Second);
            card.appendChild(h3Third);
            card.appendChild(h3Fourth);
            
            document.querySelector('div.card').appendChild(card);
        });
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

