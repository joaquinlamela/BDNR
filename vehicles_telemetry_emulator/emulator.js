import inquirer from "inquirer"
import dotenv from "dotenv"

dotenv.config();
import {createCarBot} from './utils/utils'

const createBots = "Create Bots"
const exit = "Exit"

const main = async () => {
  const response = await inquirer.prompt([
    {
      type: "rawlist",
      name: "action",
      message: "Choose",
      choices: [
        createBots,
        exit,
      ],
    },
  ])

  if(response.action == createBots) {
    const numOfBots = await inquirer.prompt([
      {
        type: "number",
        name: "numOfBots",
        message: "Choose how many bots to play",
      },
    ])
    for (let i = 1; i <= numOfBots.numOfBots; i++) {
      createCarBot(i)
    }
  }
}

main()
