const express = require('express');
const io = require('socket.io-client');
// const logProcessor = require('./utils/logProcessor');

const app = express();

// Create websocket client
const ioClient = io.connect('http://localhost:3030');
ioClient.on('log', (msg) => console.log(msg));
// ioClient.on('log', (log) => console.log(log));

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

<<<<<<< HEAD
// const io = require('socket.io-client');
// const ioClient = io.connect('http://localhost:3030');
// ioClient.on('log', (msg) => console.log(msg));

=======
>>>>>>> main
app.listen(2000, () => console.log(`Server listening on 2000.`));
