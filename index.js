const http = require('http');
const fs = require('fs');

let homefile ='';
let projectfile = '';
let registrationfile = '';

fs.readFile("./home.html", (err, home) => {         //read home.html file in homefile variable
    if(err)
    {
        throw err;
    }
    homefile = home;
});

fs.readFile("./registration.html", (err, registration) => {         //read registration.html file in registrationfile variable
    if(err)
    {
        throw err;
    }
    registrationfile = registration;
});

fs.readFile("./project.html", (err, project) => {         //read project.html file in projectfile variable
    if(err)
    {
        throw err;
    }
    projectfile = project;
});

const arguments = require('minimist')(process.argv.slice(2));   //get 2 argument in from commandline one is key and another is value
// console.log(arguments.port);
http.createServer((req,res) => {
    let url = req.url;
    res.writeHeader(200, { "content-type" : "text/html" });
    if(url == "/project")
    {
        res.write(projectfile);
        res.end();
    }
    else if(url == "/registration")
    {
        res.write(registrationfile);
        res.end();
    }
    else
    {
        res.write(homefile);
        res.end();
    }
}).listen(arguments["port"]);