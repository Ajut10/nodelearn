const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => {
    const num= _.random(0,20);
    console.log(num);
    // const greet = _.once(()=>{
    //     console.log('Hello everyone');

    // })
    // greet();
    // greet();
    console.log(req.url,req.method);
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch (req.url) {
        case '/':
            path+='index.html';
            break;
        case '/about':
            path+='about.html';
            break;

            case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','./about');
            res.end();
            break;

    
        default:
            res.statusCode = 404;
            path+='404.html';
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }else {
            // res.write(data);
            res.end(data);
        }
    });
    // res.write('<p>hello world</p>');
    // res.write('<p>hello again world</p>');
    // res.end();
});
server.listen(3000,'localhost',()=>{
    console.log('listening on port');
});
