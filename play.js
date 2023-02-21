//this function handles different aspects of the network connection to the server where the game Snek runs
const connect = require("./client");

//this function captures user input froppm the terminal command line
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //this module handels the data typed into the terminal
  stdin.on('data', handleUserInput);
  return stdin;
};

//this function is called as an argument. it's purpose is to recognize pre determained keys(typed into the console) and complete an action accordingly
const handleUserInput = function(key) {
  //anything types will show up as '.' in the terminal
  process.stdout.write('.');
  //ctrl+c will terminate this app from executing
  if (key === '\u0003') {
    process.exit();
  }
};

connect();
setupInput();