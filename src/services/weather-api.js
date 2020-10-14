export function getCurWeatherByLatLng(lat, lng) {
  let APIkey = "d5bbb7922f0d16b20dc9c78e4be4e3b3";
  let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIkey}&units=metric`;

  return fetch(endpoint).then((res) => res.json());
}
