#!/usr/bin/env node 
import inquirer from 'inquirer';
async function main() {
    const pinQuestion = {
        name: "pin",
        message: "Enter your pin",
        type: "input",
        validate: (input) => /^\d+$/.test(input) || "Pin must be a number"
    };
    const operationQuestion = {
        name: "operation",
        message: "Select operation",
        type: "list",
        choices: [
            { name: "Withdraw", value: "withdraw" },
            { name: "Deposit", value: "deposit" },
            { name: "Balance", value: "balance" }
        ]
    };
    const amountQuestion = {
        name: "amount",
        message: "Enter amount",
        type: "input",
        validate: (input) => /^\d+$/.test(input) || "Amount must be a number"
    };
    const fastCashQuestion = {
        name: "fastCash",
        message: "Select fast cash amount",
        type: "list",
        choices: [
            { name: "100", value: "100" },
            { name: "200", value: "200" },
            { name: "500", value: "500" },
            { name: "1000", value: "1000" }
        ]
    };
    const pinAnswer = await inquirer.prompt([pinQuestion]);
    console.log(pinAnswer);
    const operationAns = await inquirer.prompt([operationQuestion]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        const amountAns = await inquirer.prompt([amountQuestion]);
        console.log(amountAns);
    }
    const fastCashAns = await inquirer.prompt([fastCashQuestion]);
    console.log(fastCashAns);
}
main();
