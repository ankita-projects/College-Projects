const getWeatherInfo=()=> {
  const cityName = document.getElementById("weather").value;        //to get city name from user
  const apiKey = "c0b41b78dbafd84aa17b3a6e5dd1dcdb";                //API key to access weather service API
  const response = httpGet(
    "https://api.openweathermap.org/data/2.5/weather?q=" +          // retriving data from API server
      cityName +
      "&appid=" +
      apiKey +
      "&units=metric"
  ); 
  buildTable(response);
}
 httpGet=(theUrl)=> {                                               //created method to make http call to the API endpoint
 let xmlHttp = new XMLHttpRequest();                                 // making xmlhttp object to make API call
  xmlHttp.open("GET", theUrl, false);                               // open connection to API endpoint
  xmlHttp.send(null);                                               //send a request
  return JSON.parse(xmlHttp.responseText);                          
}
 buildTable=(response)=> {                                         // table craeted  to show data
  let table = document.getElementById("weatherTable");

  let row = document.createElement("tr");
  let weather = document.createElement("td");
  weather.innerHTML = response.weather[0].main;
  let country = document.createElement("td");
  country.innerHTML = response.sys.country;
  let temprature = document.createElement("td");
  temprature.innerHTML = response.main.temp;
  console.log(response);

  row.appendChild(weather);
  row.appendChild(country);
  row.appendChild(temprature);

  table.appendChild(row);

  switch (response.weather[0].main) {              // I added some background images for UI
    case "Clear":
      document.getElementById("body").style.backgroundImage =
        "url('images/clearsky.jpeg')";
      break;
    case "Clouds":
      document.getElementById("body").style.backgroundImage =
        "url('images/cloudy.jpg')";
      break;
    case "Snow":
      document.getElementById("body").style.backgroundImage =
        "url('images/snow.jpg')";
      break;
    case "Rain":
      document.getElementById("body").style.backgroundImage =
        "url('images/rainy.jpg')";
      break;
    case "Haze":
      document.getElementById("body").style.backgroundImage =
        "url('images/haze.png')";
      break;
    case "Fog":
      document.getElementById("body").style.backgroundImage =
        "url('images/fog.jpg')";
      break;
    case "Mist":
      document.getElementById("body").style.backgroundImage =
        "url('images/mist.jpg')";
  }

}
