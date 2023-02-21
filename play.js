//this function handles different aspects of the network connection to the server where the game Snek runs
const connect = require("./client");

//this function captures user input from the terminal command line and assigns actions to certain key commands
const setupInput = require('./input');

console.log('Connecting ...');
connect();
setupInput();