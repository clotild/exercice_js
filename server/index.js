const http = require("http");
const { mainCtrl } = require("./controllers");

const server = http.createServer(mainCtrl);

server.listen(8080);
