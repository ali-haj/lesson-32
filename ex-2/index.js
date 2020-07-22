const request = require('request');
const fs = require('fs');
const http = require('http');

request('https://jsonplaceholder.typicode.com/users', (err, response, body) => {
    if (err) {
        console.log('something wronge ...');
    } else {
        fs.writeFile('./json.text', body, err => {
            err ? console.log(err) : console.log('file has been writen...');
        })
    }
})

const server = http.createServer(
    (req, res) => {
        res.writeHead(200, {
            'content-type': 'text/json'
        });
        fs.readFile('./json.text', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.write(data);
            }
        })
    }
).listen(3000);