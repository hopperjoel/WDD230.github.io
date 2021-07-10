const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=dd504892e20d342c74bd24c89e54dc9a"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-condition').innerHTML = jsObject.list[0].weather[0].main;
        document.getElementById('current-temp').innerHTML = jsObject.list[0].main.temp;
        document.getElementById('temp-high').innerHTML = jsObject.list[0].main.temp_max;
        document.getElementById('wind-chill').textContent = jsObject.list[0].main.temp;
        document.getElementById('humidity').innerHTML = jsObject.list[0].main.humidity;
        document.getElementById('wind-speed').innerHTML = jsObject.list[0].wind.speed;
        var j = 1;
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        for(var i = 0; i < jsObject.list.length; i++) {
            var dayTime = jsObject.list[i].dt_txt;
            var today = new Date();

            if (dayTime.includes("18:00:00")) {
                var iconsrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
                var imagesrc = jsObject.list[i].weather[0].icon;
                var imagesrc = imagesrc.slice(-3, -3);
                var desc = jsObject.list[i].weather[0].description;
                var temp = jsObject.list[i].main.temp;
                var dateFormat = new Date(dayTime);
                document.getElementById(`imagesrc-${j}`).textContent = imagesrc;
                document.getElementById(`icon-${j}`).setAttribute('src', iconsrc);
                document.getElementById(`icon-${j}`).setAttribute('alt', desc);
                document.getElementById(`temp-${j}`).textContent = temp;
                document.getElementById(`day-${j}`).textContent = weekDays[dateFormat.getDay()];
                j++;
            };
        };

    });