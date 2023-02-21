
// the keyword localhost only works if you are connecting with your own computer(hosting the server in the same computer you run the play.js file). To connect to another computer you need to replace the keyword with the IP you want to connect to
const IP = 'localhost';
const PORT = 50541;

//The keyMap below sends movement commands to the server (w=up, s=down, d=right, a=left, e=message: !!, q=message Charge!!)
const keyMap = {
  w: 'Move: up',
  W: 'Move: up',
  s: 'Move: down',
  S: 'Move: down',
  a: 'Move: left',
  A: 'Move: left',
  d: 'Move: right',
  D: 'Move: right',
  e: 'Say: !!',
  E: 'Say: !!',
  q: 'Say: Charge!!',
  Q: 'Say: Charge!!',
};

module.exports = {IP, PORT, keyMap};

