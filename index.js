const HTTP = require("http");
const WebServer = HTTP.createServer();

// WebServer.listen(process.env.PORT, process.env.HOSTNAME);
WebServer.listen(3000, '127.1.0.195')

