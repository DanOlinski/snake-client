const net = require("net");
const {IP, PORT} = require('./constants')

//this function handles different aspects of the network connection to the server where the game Snek runs
const connect = function() {

  //this function connects to a server through an IP address and specified port
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");

  //this function gets anny data that the server sends to the client and logs it in the client's terminal.
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  //this function confirms(logs into the terminal), if the connection was successful
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  //this function sends messages to the server (defines player name)
  conn.on("connect", () => {
    conn.write('Name: EAT');
    
    /*
    //this test code moves the snake in the up direction automatically
    const moveUp = function(repeat){
      let timer = 100;
      for (i = 0; i < repeat; i++) {
        setTimeout(() => conn.write('Move: up'), timer)
        timer += 100;
      }
    }
    moveUp(100)
    */
  });
  return conn;
};

module.exports = connect;