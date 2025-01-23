import axios from "axios";
import dotenv from 'dotenv';
import { promptUserForTemperature } from "./helpers/promptUserForTemperature.js";
import { getRandomCityName } from "./services/getRandomCity.js";

dotenv.config();
const weatherUrl: string = process.env.WEATHER_FORECAST_SERVICE_URL;

//Temporary solution for restcountries SSL issue
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

main();

async function main() {
  const city = await getRandomCityName();
  const cityWeather = await fetchCityWeather(city.name);
  const cityWeatherTemperature = Math.round(cityWeather.main.temp);

  let userTemperatureGuess;

  do {
    userTemperatureGuess = await promptUserForTemperature(city.name);

    if (userTemperatureGuess < cityWeatherTemperature) { console.log("C'est plus !"); }
    if (userTemperatureGuess > cityWeatherTemperature) { console.log("C'est moins !"); }

  } while (userTemperatureGuess !== cityWeatherTemperature);

  console.log(`Bien joué ! La température à ${cityName} est bien de ${cityWeatherTemperature}°C.`);
}

async function fetchCityWeather(cityName: string) {
  try {
    const response = await axios.get(weatherUrl, {
      params: {
        q: cityName,
        appid: process.env.WEATHER_FORECAST_SERVICE_API_KEY,
        units: 'metric'
      }
    })

    return response.data;

  } catch (error: any) {
    console.log("Error fetching weather forecast:", error);
  }

}