

import inquirer from "inquirer";

import chalk from "chalk";

let bmi_calculator = await inquirer.prompt([
    //user input
    {
 type: 'number',
 name: "num1",
 message:"Enter your first number"
},
 //select operations
 {
    type:"list",
    choices:["addition","subtraction","multiplication","Division","Reminder"],
    name:'operator',
    message:"select your operator for calculation"
 },
 //second number input
 {
    type: 'number',
    name: "num2",
    message:"Enter your second number"
 }
]);

if(bmi_calculator.operator === "addition"){
console.log(bmi_calculator.num1 + bmi_calculator.num2);
}else if(bmi_calculator.operator === "subtraction"){
    console.log(bmi_calculator.num1 - bmi_calculator.num2);
}else if(bmi_calculator.operator === "multiplication"){
   console.log(bmi_calculator.num1 * bmi_calculator.num2);
}else if(bmi_calculator.operator === "Division"){
   console.log(bmi_calculator.num1 / bmi_calculator.num2);
}else if (bmi_calculator.operator === "Reminder"){
   console.log(bmi_calculator.num1 % bmi_calculator.num2)
}else{
   console.log("Invalid operators");
}