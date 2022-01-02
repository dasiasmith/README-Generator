// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// const questions = [];
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: "What is your project's name?",
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None' ],
            default: 'MIT',
        },
        {
            type: 'checkbox',
            name: 'depend',
            message: 'What command should be run to install dependencies?',
            choices: ['npm i'],
            default: 'npm i',
        },
        {
            type: 'checkbox',
            name: 'runTest',
            message: 'What command should be run to run tests?',
            choices: ['npm test'],
            default: 'npm test',
        },
        {
            type: 'input',
            name: 'aboutRepo',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'aboutContr',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
