const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid={dd504892e20d342c74bd24c89e54dc9a}"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });