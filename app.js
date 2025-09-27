

// function sayHello(name) {
//     console.log('Hello ' + name);
// } 

// sayHello('Mosh')





//Events

// const CheckEvent = require('events');
// const emitter = new CheckEvent();

// //Register a listener
// emitter.on('messageLogged', function(){
//     console.log('Here There Am Alive');
// });

// //Raise/Call an event
// emitter.emit('messageLogged');


//Event Argument

// const CheckEvent = require('events');


// const Logger = require('./logger');
// const logger = new Logger();

// //Register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Here There Am Alive', arg);
// });


// logger.log('message');

//HTTP Module

const { Socket } = require('dgram');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Found Life Out Here!');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.write('Cant Beleieve It');
        res.end();
    }
});

server.listen(3000);

console.log('Port 3000 Up and Running......');