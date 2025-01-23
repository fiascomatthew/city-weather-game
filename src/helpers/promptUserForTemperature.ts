import inquirer from "inquirer";
import { Difficulty, Weather } from "../types/types.js";

export async function promptUserForTemperature(cityName: string, difficulty: Difficulty, weather: Weather): Promise<number> {
  const hint = difficulty === Difficulty.HARD ? "" : `Indice: ${weather.description} avec un vent à ${weather.wind} km/h.`;

  const { temperature } = await inquirer.prompt<{ temperature: number }>([{
    type: "number",
    name: "temperature",
    message: `Quelle est la température à ${cityName} ? ${hint}`
  }]);

  return temperature;
}
