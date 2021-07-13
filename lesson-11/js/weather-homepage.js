const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];

        const townpages = towns.filter(
            (town) =>
            town.name == "Fish Haven" ||
            town.name == "Soda Springs" ||
            town.name == "Preston"
        );

        townpages.forEach((town) => {
            let card = document.createElement('section');
            let div1 = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let figure = document.createElement('figure');
            let img = document.createElement('img');
            let p = document.createElement('p');

            h2.textContent = `${town.name}`;
            h3.textContent = `${town.motto}`;
            p.innerHTML = `Year Founded: ${town.yearFounded}<br> Population: ${town.currentPopulation}<br>
            Annual Rainfall: ${town.averageRainfall}`;

            card.setAttribute("class", "town");
            div1.setAttribute("class", "name-motto")
            figure.setAttribute("class", "town-image");
            img.setAttribute("src", `images/${town.photo}`);
            img.setAttribute("alt", `Town of ${town.name}`);
            p.setAttribute("class", "town-info");

            card.appendChild(div1);
            div1.appendChild(h2);
            div1.appendChild(h3);
            div1.appendChild(p);
            card.appendChild(figure);
            figure.appendChild(img);
            
            
            document.querySelector('div.cards').appendChild(card);
        });
    });

function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
    };

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();