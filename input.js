//this variable allows to run the connect function located in client.js
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
  //anything types will show up as '.' in the terminal
  process.stdout.write('.');
  //ctrl+c will terminate this app
  if (key === '\u0003') {
    process.exit();
  }

  //The if statements below sends movement commands to the server (w=up, s=down, d=right, a=left)
  if (key === 'w' || key === 'W') {
    connection.write('Move: up');
  } else if (key === 's' || key === 'S') {
    connection.write('Move: down');
  } else if (key === 'd' || key === 'D') {
    connection.write('Move: right');
  } else if (key === 'a' || key === 'A') {
    connection.write('Move: left');
  }
};

module.exports = setupInput;