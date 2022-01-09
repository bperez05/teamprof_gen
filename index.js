// Node commands
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');
const path = require('path');

// Type of team member 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

const staffArr = [];

//prompt questions for Team Profile 
const employeeQuestion = function () {

const typeOfMember = function () {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select team member to add?',
            choices: [ 
                "Manager",
                "Engineer",
                "Intern",        
            ]
        }
   ])
    //prompt to manager
            .then((data) => {
                if(data.role === "Manager") {
                    // manager questions 
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter team member\'s name:"
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Enter team member\'s id:'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'What is team member\'s email?'
                        },
                        {
                            type: 'input',
                            name: 'office',
                            message: "Enter team member\'s office number?"
                        },
                        //team member (manager)class that redirects to the staff array 
                    ]).then(function (data) {
                        const manager = new Manager(data.name, data.id, data.email, data.office);
                        staffArr.push(manager)
                        console.log('You added a manager!') // console log to user once roles prompts are completed 
                        newMember()
                    })
                } else if (data.role === "Engineer") {
                    return inquirer.prompt([
                        {
                            type: 'data',
                            name: 'name',
                            message: "Enter team member\'s name:"
                        },
                        {
                            type: 'data',
                            name: 'id',
                            message: 'Enter team member\'s id:'
                        },
                        {
                            type: 'data',
                            name: 'email',
                            message: 'What is team member\'s email?'
                        },
                        {
                            type: 'data',
                            name: 'github',
                            message: "Enter team member\'s GitHub username:"
                        },
                    ]) .then(function (data) {
                        const engineer = new Engineer(data.name, data.id, data.email, data.github)
                        staffArr.push(engineer)
                        console.log('You added a engineer!') // console log to user once roles prompts are completed 
                        newMember()
                    })
                } else if (data.role === "Intern") {
                    return inquirer.prompt([
                        {
                            type: 'data',
                            name: 'name',
                            message: "Enter team member\'s name:"
                        },
                        {
                            type: 'data',
                            name: 'id',
                            message: 'Enter team member\'s id:'
                        },
                        {
                            type: 'data',
                            name: 'email',
                            message: 'What is team member\'s email?'
                        },
                        {
                            type: 'data',
                            name: 'school',
                            message: "What school did team member attend?"
                        },
                    ]) .then(function(data) {
                        const intern = new Intern(data.name, data.id, data.email, data.school)
                        staffArr.push(intern)
                        console.log('You added a intern!')// console log to user once roles prompts are completed 
                        newMember()
                    })              
                }
        })

}

const newMember = function () {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "newMember",
            message: "Do you want to add another team member ?",    // askes user if they wish to enter another team member
        }
    ]).then((data) => {
        if(data.newMember === true){
            typeOfMember();
        } else {
            console.log(staffArr[0].name)
            inputCompleted(staffArr);
        }
    });
};


// Writes data to HTML  
function inputCompleted(staffArr) {
    fs.writeFileSync("./utils/index.html",generateHTML(staffArr), "utf-8")
    console.log("You created a index.html") 
    }
typeOfMember()
}
employeeQuestion(); 
