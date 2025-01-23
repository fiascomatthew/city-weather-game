import inquirer from "inquirer";

export async function promptUserForPseudo(): Promise<string> {
  const { pseudo } = await inquirer.prompt<{ pseudo: string }>([{
    type: "input",
    name: "pseudo",
    message: "Entre ton pseudo pour sauvegarder ton score, ou appuie sur Entrée pour ignorer:"
  }]);

  return pseudo;
}