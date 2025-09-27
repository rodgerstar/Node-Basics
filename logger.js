const CheckEvent = require('events');


var url = 'http://mylogger.dev'

class Logger extends CheckEvent {
    log(message) {
    console.log(message)

    //Raise/Call an event
this.emit('messageLogged', {id: 1, url: 'http://' });
}
}



module.exports = Logger;
