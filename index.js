// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:"title",
        message:"What is the title of your project?"
    },
    {
        type:'input',
        name:'description',
        message:'Please describe you project.'
    },
    {
        type:'input',
        name:'installation',
        message:'How to install your project?'
    },
    {
        type:'input',
        name:'usage',
        message:'Please provide the instructions and examples for use.'
    },
    {
        type:'input',
        name:'contribution',
        message:'Please list other contributors of this project.'
    },
    {
        type:'input',
        name:'test',
        message:"Please write some tests for your application."
    },
    {
        type:'list',
        name:'license',
        message:"What is the license of your project?",
        choices:['MIT','Apache', 'GPL 3.0']
    },
    {
        type:'input',
        name:'username',
        message:"What is your Github username?"
    },
    {
        type:'input',
        name:'email',
        message:"What is your Email address?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=>
    err ? console.log(err) : console.log('Successfully created README.md!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        const markdownText = generateMarkdown(answers);
        writeToFile('README.md',markdownText)
    });
}

// Function call to initialize app
init();
