// Node commands
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Type of team member 
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');

const OUTPUT_DIR = path.resolve(__dirname, "lib");
const outputPath = path.join(OUTPUT_DIR, "./utils/index.html");
const render = require('./utils/genrateHTML');

//prompt questions for Team Profile 
const employeeQuestion = []
function typeOfMember() {
    return inquirer.prompt([
        {
            message: "What kind of member would you like to add?",
            name: "type",
            type: "list",
            choices: [
                "Manager",
                "Intern",
                "Engineer"
            ],

        }
    ])
        .then((data) => {
            console.log(data);
            if (data.type === "Manager") {
                managerQuestion();
            }
            else if (data.type === "Intern") {
                internQuestion();
            }
            else if (data.type === "Engineer") {
                engineerQuestion();
            }
            else {
                writeToFile();
                console.log('Heres your team!');
            }
        });
}
function managerQuestion() {
    return (
        inquirer.prompt([
            {
                message: "What is your Managers name?",
                name: "name",
                type: "input",
            },
            {
                message: "What is your ID?",
                name: "id",
                type: "input",
            },
            {
                message: "What is your email?",
                name: "email",
                type: "input",
            },
            {
                message: "What is your office number?",
                name: "number",
                type: "input",
            },
        ])
            // passes data from inquirer and pass into employeequestion
            .then((data) => {
                const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
                employeeQuestion.push(newManager);
                typeOfMember();
            })
    );
}
// passes data from inquirer and pass into employeequestion. 
function engineerQuestion() {
    return (
        inquirer.prompt([
            {
                message: "What is your Engineers name?",
                name: "name",
                type: "input",
            },
            {
                message: "What is your ID?",
                name: "id",
                type: "input",
            },
            {
                message: "What is your email?",
                name: "email",
                type: "input",
            },
            {
                message: "What is your Github Url?",
                name: "Github",
                type: "input",
            },
        ])
            // passes data from inquirer and pass into employeequestion
            .then((data) => {
                const newEngineer = new Engineer(data.name, data.id, data.email, data.Github);
                employeeQuestion.push(newEngineer);
                typeOfMember();
            })
    );
}
// Intern data input
function internQuestion() {
    return (
        inquirer.prompt([
            {
                message: "What is your Interns name?",
                name: "name",
                type: "input",
            },
            {
                message: "What is your ID?",
                name: "id",
                type: "input",
            },
            {
                message: "What is your email?",
                name: "email",
                type: "input",
            },
            {
                message: "What school did you go to?",
                name: "school",
                type: "input",
            },

        ])
            //take data from inquirer and pass into employeequestion
            .then((data) => {
                const newIntern = new Intern(data.name, data.id, data.email, data.school);
                employeeQuestion.push(newIntern);
                typeOfMember();
            })
    );
}
typeOfMember();
// Writes data to HTML  
const writeToFile = () => {
    const contentHTML = render(employeeQuestion);
    fs.writeFileSync(outputPath, contentHTML, "utf-8");
};
