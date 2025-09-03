const EventEmitter = require('events');
const firstEvent = new EventEmitter();

// defining an event listener

firstEvent.on('sayHello',(names)=> {
    console.log(`Hello ${names}`);
})



firstEvent.emit('sayHello','Isaac');
// adding event listener we use on.