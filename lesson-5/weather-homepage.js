const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++ ) {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3')
            let img = document.createElement('img');
            let p = document.createElement('p');
            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            img.setAttribute('src', towns[i].photo);
            p.innerHTML = 'Year Founded: ' + towns[i].yearFounded + '<br>' +
            'Population ' + towns[i].currentPopulation + '<br>' +
            'Average Rainfall ' + towns[i].averageRainfall;
            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(img);
            card.appendChild(p);
            
            document.querySelector('div.cards').appendChild(card);
        }
    });