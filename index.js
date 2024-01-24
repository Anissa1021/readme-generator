// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'Whats your Github Username?',
        name:"github"
    },
    {
        type:'input',
        message:'Whats your email?',
        name:'email'
    },
    {
        type:'input',
        message:'Whats your project title?',
        name:'title'
    },
    {
        type:'input',
        message:'What is the description of your project?',
        name:'description'
    },
    {
        type:'input',
        message:'What are the istructions of the installation?',
        name:'install'
    },
    {
        type:'input',
        message:'What is the instrctions for the usage?',
        name:'usage',
    },
    {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What command should be run for testing?',
        name:'test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of licence would you like to include?',
        choices: ['MIT', 'GPL', 'BSD', 'None'],
        when: (confirmLicenses) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }   
     },
]

function writeFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success!')
    })
}

function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeFile(fileName, data)
    })
}

init();