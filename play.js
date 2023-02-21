//this function handles different aspects of the network connection to the server where the game Snek runs
const connect = require("./client");

//this function captures user input from the terminal command line and assigns actions to certain key commands (w=up, s=down, d=right, a=left, e=message: !!, q=message Charge!!, ctrl+c will terminate this app)
const setupInput = require('./input');

console.log('Connecting ...');
setupInput(connect());