const express = require("express");
const io = require("socket.io-client");
// const logProcessor = require('./utils/logProcessor');

const app = express();

// Create websocket client
const ioClient = io.connect("http://localhost:3030");
ioClient.on("log", (msg) => console.log(msg));
// ioClient.on('log', (log) => console.log(log));

<<<<<<< HEAD
const apiRouter = require("./routes/api");

app.use("/api", apiRouter);
=======
// const apiRouter = require('./routes/api');

// app.use('/api', apiRouter);
>>>>>>> 21c39481cc97ed92ff27e6ce179c6b4a0c6cc2fc

// const io = require('socket.io-client');
// const ioClient = io.connect('http://localhost:3030');
// ioClient.on('log', (msg) => console.log(msg));

app.listen(3000, () => console.log(`Server listening on 3000.`));
