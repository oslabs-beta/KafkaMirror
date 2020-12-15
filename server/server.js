const express = require('express');
const app = express();

// const kafkaInstance = require('./kafkaInstance');

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

// const io = require('socket.io-client');
// const ioClient = io.connect('http://localhost:3030');
// ioClient.on('log', (msg) => console.log(msg));

app.listen(2000, () => console.log(`Server listening on 2000.`));
