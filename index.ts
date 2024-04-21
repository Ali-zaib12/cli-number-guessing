#! /usr/bin/env node

import inquirer from "inquirer"

//Computer wil generate a number
//User input for gussing number
//compare user input with Computer generated number and show results

const randomnumber = Math.floor(Math.random()* 6 + 1)

const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Please enter a number"
    }

])
if(answer.userGuessednumber === randomnumber){

    console.log("Right Answer")
}else{
    console.log("You gussed a Wrong number")
}
