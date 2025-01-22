import inquirer from "inquirer";

main();

async function main() {
  const cityName = await getRandomCityName();
  const cityWeather = await fetchCityWeather(cityName);

  let userTemperatureGuess;

  do {
    userTemperatureGuess = await promptUserForTemperature(cityName);

    if (userTemperatureGuess < cityWeather.temperature) { console.log("C'est plus !"); }
    if (userTemperatureGuess > cityWeather.temperature) { console.log("C'est moins !"); }

  } while (userTemperatureGuess !== cityWeather.temperature);

  console.log(`Bien joué ! La température à ${cityName} est bien de ${cityWeather.temperature}°C.`);
}


async function promptUserForTemperature(cityName) {
  const { temperature } = await inquirer.prompt([{
    type: "number",
    name: "temperature",
    message: `Quelle est la température à ${cityName} ?`
  }]);
  return temperature;
}

async function getRandomCityName() {
  // TODO: implement and extract this function using this API : https://restcountries.com
  return "Paris";
}

async function fetchCityWeather(cityName) {
  // TODO: implement and extract this function using this API : https://github.com/robertoduessmann/weather-api
  return { temperature: 10, description: "Sunny" };
}