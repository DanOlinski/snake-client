const keyMaping = require('./constants');

//this variable stores the connect function located in client.js and is available globally in this file
let connection;

//this function captures user input from the terminal command line
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //this module handels the data typed into the terminal
  stdin.on('data', handleUserInput);
  return stdin;
};

//this function is called as an argument in the stdin.on function above. it's purpose is to recognize pre determained keys(typed into the console) and complete an action accordingly
const handleUserInput = function(key) {
  //anything types will show up as ''(empty string) in the terminal
  process.stdout.write('');
  //ctrl+c will terminate this app
  if (key === '\u0003') {
    process.exit();
  }

  //The statement below sends movement commands to the server (w=up, s=down, d=right, a=left, e=message: !!, q=message Charge!!)
  //the reason this code is wrapped in an if statment is so that the app doesn't crash when unmapped keys are typed in the terminal
  if(keyMaping.keyMap[key]){
  connection.write(keyMaping.keyMap[key]);
  }
};

module.exports = setupInput;