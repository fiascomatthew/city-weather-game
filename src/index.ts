import axios from "axios";
import dotenv from 'dotenv';
import { promptUserForTemperature } from "./promptUserForTemperature.js";

dotenv.config();
const weatherUrl: string = process.env.WEATHER_FORECAST_SERVICE_URL;
const restCountriesUrl: string = process.env.REST_COUNTRIES_URL;

//Temprary solution for restcountries SSL issue
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

main();

async function main() {
  const cityName = await getRandomCityName();
  const cityWeather = await fetchCityWeather(cityName);
  const cityWeatherTemperature = Math.round(cityWeather.main.temp);

  let userTemperatureGuess;

  do {
    userTemperatureGuess = await promptUserForTemperature(cityName);

    if (userTemperatureGuess < cityWeatherTemperature) { console.log("C'est plus !"); }
    if (userTemperatureGuess > cityWeatherTemperature) { console.log("C'est moins !"); }

  } while (userTemperatureGuess !== cityWeatherTemperature);

  console.log(`Bien joué ! La température à ${cityName} est bien de ${cityWeatherTemperature}°C.`);
}

async function getRandomCityName() {
  try {
    const response = await axios.get(restCountriesUrl, {
      params: {
        fields: 'capital'
      }
    });

    const citiesWithCapital = response.data.filter((city: any) => city.capital);

    if (citiesWithCapital.length > 0) {
      return citiesWithCapital[Math.floor(Math.random() * citiesWithCapital.length)].capital[0];
    }

  } catch (error: any) {
    console.log("Error fetching cities:", error);
  }
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