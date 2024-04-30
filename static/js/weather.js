navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const apiKey = '6bdba7a380c0e4047a304fe82068ffc4';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const temp = data.main.temp;
          const location = data.name;
          const weatherType = data.weather[0].main;
          const windSpeed = data.wind.speed; 
          const humidity = data.main.humidity;
          const tempval =(((temp - ((273.15))).toFixed(2))*3);
          
          
          
          document.getElementById('tempvalue').innerHTML = ((Number(tempval))/3).toFixed(2)  + '°  C' ; 
          document.getElementById('location').innerHTML = location;
          document.getElementById('wedimg').innerHTML = weatherType;
          document.getElementById('windvalue').innerHTML = windSpeed;
          document.getElementById('humidvalue').innerHTML = humidity;
          document.getElementById('tempprogval').style.height = ((Number(tempval)) + 'px');
          
          

        })
        .catch(error => console.log(error));
    },
    (error) => {
      console.log('Error:', error);
    }
);
  
  