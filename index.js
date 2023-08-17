const HTTP = require("http");
const WebServer = HTTP.createServer();

WebServer.listen(process.env.PORT, process.env.HOSTNAME);
