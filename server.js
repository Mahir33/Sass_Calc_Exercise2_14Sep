const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

/* Initialize the server and the watcher */
const server = express();
const liveReloadServer = livereload.createServer();

/* Use the middleware */
server.use(connectLiveReload());
server.use(express.static("dist"));

/* Watch the static changes */
liveReloadServer.watch("dist");

/* watch the port for the express server */
const port = 8612;

/* Nodemon port listen */

server.listen(port, function() {
    console.log(`Server is listening to the port: ${port}`);
});