const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const day = document.getElementById("day");
const today_date = document.getElementById("today_date");

const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// console.log(date.toLocaleString())
// day.innerText = `${days[date.getDay()]} ${date.toLocaleString()}`;

day.innerText = `${days[date.getDay()]}`;
today_date.innerText = `${date.getDate()} ${months[date.getMonth()]}`;

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  // console.log(cityVal);
  if (cityVal == "") {
    city_name.innerText = "Plz write the name before search";
  } else {
    try {
      let api = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=5f05f14db51f8759f4cce8fa61a1ebbc`;
      cityName.value = "";
      const response = await fetch(api);
      const data = await response.json();
      const arrData = [data];
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;

      // var nameValue = realdata['name'];
      // var countryValue = realdata['sys']['country'];
      // var descValue = realdata['weather'][0]['main'];

      // city_name.innerText = nameValue;
      // temp.innerText = descValue;
      // temp_status.innerText = countryValue;
    } catch {
      city_name.innerText = "Plz enter the city name properly";
      cityName.value = "";
    }
  }
};

submitBtn.addEventListener("click", getInfo);
