

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

const CheckEvent = require('events');


const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Here There Am Alive', arg);
});


logger.log('message');