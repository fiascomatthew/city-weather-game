import axios from "axios";
import { HttpRequester } from "./HttpRequester.js";
import { CountryDTO } from "../types/dto.js";
import { City } from "../types/types.js";

const restCountriesUrl: string = process.env.REST_COUNTRIES_URL;

export async function getRandomCityName() {

  const countries = await HttpRequester.get<CountryDTO[]>(restCountriesUrl);

  if (countries.length < 1) {
    return { name: "Paris", countryName: "France" };
  }

  const randomCountry = countries[Math.floor(Math.random() * countries.length)];

  if (!randomCountry.capital || !randomCountry.capital[0]) {
    return { name: "Paris", countryName: "France" };
  }

  const city: City = {
    name: randomCountry.capital[0],
    countryName: randomCountry.name.common
  }

  return city;
}