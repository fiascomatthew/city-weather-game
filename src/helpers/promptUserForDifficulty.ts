import inquirer from "inquirer";
import { Difficulty } from "../types/types.js";

export async function promptUserForDifficulty(): Promise<Difficulty> {
  const { difficulty } = await inquirer.prompt<{ difficulty: Difficulty }>([{
    type: "list",
    name: "difficulty",
    message: "Choisissez la difficulté:",
    choices: [Difficulty.EASY, Difficulty.HARD]
  }]);

  return difficulty;
}