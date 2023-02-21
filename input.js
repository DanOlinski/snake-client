//this function captures user input from the terminal command line
const setupInput = function() {
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
};

module.exports = setupInput;