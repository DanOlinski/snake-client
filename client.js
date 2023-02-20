const net = require("net");

//this function handles different aspects of the network connection to the server where the game Snek runs
const connect = function() {

  //this function connects to a server through an IP address and specified port
  const conn = net.createConnection({
    // the keyword local host only works if you are connecting with yout own computer as a test. To connect to another computer you need to replace the keyword with the IP you want to connect to
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding("utf8");

  //this function get's anny data that the server sends to client and logs it in the clients terminal.
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  //this function confirms(logs into the terminal), if the connection was successful
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
  })

  //this function sends a message to the server
  conn.on("connect", () => {
    conn.write('Name: EAT');
  });

  return conn;

};

module.exports = connect