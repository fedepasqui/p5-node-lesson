console.log("up and running");

let express = require("express");
//loading express
let app = express();

//creating a port to activate express
let port = 3000;

//connection will happen on the port 3000
let server = app.listen(port);

console.log("server is running on http://localhost:" + port);

app.use(express.static("public"));
