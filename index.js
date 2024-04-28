// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    { type: "input", name: "title", message: "what is the title of your project?" },
    { type: "input", name: "description", message: "provide a description" },
    { type: "input", name: "usage", message: "provide usage instructions" },
    { type: "input", name: "installation", message: "provide installation instructions" },
    { type: "input", name: "testing", message: "provide instrcutions for running tests" },
    { type: "input", name: "email", message: "provide your email" },
    { type: "input", name: "github", message: "what is your github user name?" },
    { type: "list", name: "license", message: "what is the license for the project?", choices: ["mit", "apache 2.0", "bsd3", "none"] },
    { type: "input", name: "contribute", message: "provide instructions for contributing to the project" },








];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        fs.writeFile("dist/README.md", generateMarkdown(answers), err => {
            if (err) console.log(err)
            else console.log("your file was successfully created")

        })

    })



}

// Function call to initialize app
init();
