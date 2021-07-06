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
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let figure = document.createElement('figure');
            let img = document.createElement('img');
            let p = document.createElement('p');

            h2.textContent = `${town.name}`;
            h3.textContent = `${town.motto}`;
            p.innerHTML = `Year Founded: ${town.yearFounded}<br> Population: ${town.currentPopulation}<br>
            Annual Rainfall: ${town.averageRainfall}`;

            card.setAttribute("class", "town-info");
            figure.setAttribute("class", "town-image");
            img.setAttribute("src", `${town.photo}`);
            img.setAttribute("alt", `Town of ${town.name}`);

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(figure);
            figure.appendChild(img);
            card.appendChild(p);
            
            document.querySelector('div.cards').appendChild(card);
        });
    });

function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
    }