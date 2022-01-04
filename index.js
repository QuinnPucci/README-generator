// Packages and Sources
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// Questions Array
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project in detail.",
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if applicable.",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the main intended usage of your project?",
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for the Project?',
        choices: ["BSD 3-Clause License", "Boost Software License 1.0", "Apache 2.0 License", "None"]
    },
    {
        type: "input",
        name: "contributors",
        message:
          "Who are the contributors to this project, and what are the guidelines for future contributions?",
    },
    {
        type: "input",
        name: "tests",
        message:
          "Please describe if there was a way in which this application can be tested.",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your Github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
    },
];


// Function to initialize app, store answers in variable, and write file using answer data
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

// Call Initialize function
init();