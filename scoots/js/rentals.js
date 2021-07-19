
const requestURL = "https://hopperjoel.github.io/WDD230.github.io/scoots/data/rentals.json"
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const rentals = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++ ) {

            let tr = document.createElement('tr');
            let name = document.createElement('td');
            let max = document.createElement('td');
            let resHalf = document.createElement('td');
            let resFull = document.createElement('td');
            let walkHalf = document.createElement('td');
            let walkFull = document.createElement('td');
            name.textContent = rentals[i].name;
            max.textContent = rentals[i].maxPersons;
            resHalf.textContent = rentals[i].reservationHalf;
            resFull.textContent = rentals[i].reservationFull;
            walkHalf.textContent = rentals[i].walkInHalf;
            walkFull.textContent = rentals[i].walkInFull;

            tr.appendChild(name);
            tr.appendChild(max);
            tr.appendChild(resHalf);
            tr.appendChild(resFull);
            tr.appendChild(walkHalf);
            tr.appendChild(walkFull);
            document.querySelector('table.rental-table').appendChild(tr);
        }
    });


