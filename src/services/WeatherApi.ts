import { WeatherDTO } from "../types/dto.js";
import { Weather } from "../types/types.js";
import { HttpRequester } from "./HttpRequester.js";

const weatherUrl: string = process.env.WEATHER_FORECAST_SERVICE_URL;

export async function fetchCityWeather(cityName: string) {
  const params = {
    q: cityName,
    appid: process.env.WEATHER_FORECAST_SERVICE_API_KEY,
    units: 'metric'
  };

  const weather = await HttpRequester.get<WeatherDTO>(weatherUrl, params);

  return typeof weather === "undefined" ? { temperature: 20, description: "Sunny", wind: 10 } : formatWeather(weather);
}

function formatWeather(weather: WeatherDTO): Weather {
  return {
    temperature: Math.round(weather.main.temp),
    description: weather.weather[0].description,
    wind: weather.wind.speed,
  };
}