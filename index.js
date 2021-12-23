// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHubUser',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the Project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for the Project?',
        choices: ["BSD 3-Clause License", "Boost Software License 1.0", "Apache 2.0 License", "None"]
    },
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then( (answers)=> {
        console.log(answers)
        var templateCreator = generateMarkdown(answers)
        console.log(templateCreator)
        fs.writeFile ('./dist/README.md', templateCreator, (err) => {
            if (err) {
                throw err
            }
            console.log('File created')
        })
    })
}

// Function call to initialize app
init();