const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=dd504892e20d342c74bd24c89e54dc9a"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';
        const desc = jsObject.list[0].weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
        
    });