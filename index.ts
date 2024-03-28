#! /usr/bin/env node

import inquirer from "inquirer"

// computer will generate random number - Done

// User input for guessing number - Done

// compare user input with coputer generated number and show result - Done

const randomNumber = Math.floor(Math.random() * 6 + 1)


const answers = await inquirer.prompt ([
{
    name: "userGuesseNumber",
    type: "number",
    message: "please guess a number 1-6 : ",}

]);

console.log(answers);

if (answers.userGuesseNumber === randomNumber ){
    console.log("congrtratulation! you guessed right number.")
 } else {
        console.log("you guessed wrong number")
    }
