import { promptUserForDifficulty } from "./helpers/promptUserForDifficulty.js";
import { promptUserForPseudo } from "./helpers/promptUserForPseudo.js";
import { promptUserForTemperature } from "./helpers/promptUserForTemperature.js";
import { saveScore } from "./helpers/saveScore.js";
import { getRandomCityName } from "./services/RestCountriesApi.js";
import { fetchCityWeather } from "./services/WeatherApi.js";

main();

async function main() {
  const city = await getRandomCityName();
  const cityWeather = await fetchCityWeather(city.name);

  const difficulty = await promptUserForDifficulty();
  let userTemperatureGuess;
  let counter = 0;

  do {
    userTemperatureGuess = await promptUserForTemperature(city.name, difficulty, cityWeather);

    if (userTemperatureGuess < cityWeather.temperature) { console.log("C'est plus !"); }
    if (userTemperatureGuess > cityWeather.temperature) { console.log("C'est moins !"); }

    counter++;

  } while (userTemperatureGuess !== cityWeather.temperature);

  console.log(`Bien joué ! La température à ${city.name} est bien de ${cityWeather.temperature}°C.`);
  console.log(`Tu as trouvé en ${counter} essai(s)!`);

  const pseudo = await promptUserForPseudo();

  if (pseudo && typeof pseudo === 'string') {
    await saveScore(pseudo, counter);
    console.log('Score enregistré avec succès');
  }
}