const http = require('http');

const plus = require('./plus');
const minus = require('./minus');

let result;

if(process.argv[3]=== 'plus'){
    result = plus.plusFun(process.argv[2]);
}
if((process.argv[3])=== 'minus'){
    result = minus.minus(process.argv[2])
}

const server = http.createServer(
    (req,res)=> {
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(`<h4>${result}</h4>`);
        res.end()
    }
).listen(3000)