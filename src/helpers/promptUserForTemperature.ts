import inquirer from "inquirer";

export async function promptUserForTemperature(cityName: string) {
  const { temperature } = await inquirer.prompt<{ temperature: number }>([{
    type: "number",
    name: "temperature",
    message: `Quelle est la température à ${cityName} ?`
  }]);

  return temperature;
}
