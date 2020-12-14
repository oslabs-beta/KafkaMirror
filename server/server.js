const express = require("express");
const app = express();

// const kafkaInstance = require('./kafkaInstance');

const apiRouter = require("./routes/api");

app.use("/api", apiRouter);

const io = require("socket.io-client");
const ioClient = io.connect("http://localhost:3030");
ioClient.on("log", (msg) => console.log(msg));

// const io2 = require('socket.io-client');
// const ioClient2 = io.connect('http://localhost:3030');
// ioClient2.on('log', (msg) => console.log(`2!!!!!!!!!!!!!!!!! ${msg}`));

// const io = require('socket.io-client');
// const ioClient = io.connect('http://localhost:3030');
// ioClient.on('log', (msg) => console.log(msg));

// const io = require("socket.io-client");
// const socket = io.connect("http://localhost:3030");

// socket.on("connect", () => console.log("is connected"));

// socket.on("log", function (data) {
//   console.log("Message from server:", data);
// });

// socket.on("message", function (data) {
//   console.log("Message from server:", data);
// });

// const io = require("socket.io").listen(3030);
// io.sockets.on("connection", (socket) => {
//   console.log("server is connected");
//   socket.on("log", (data) => console.log(data));
// });

// const producer = kafkaInstance.producer();

// `async function testEvent() {
//   console.log("test event called");
//   await producer.connect();
//   await producer.send({
//     topic: "mirrorTest",
//     messages: [{ value: "mirror test message" }],
//   });
//   console.log("test event occured");
// }`

// testEvent();

// createConsumer(kafkaInstance, "transactions");

app.listen(3000, () => console.log(`Server listening on 3000.`));

// const path = require('path');

// app.use('/dist', express.static(path.join(__dirname, '../dist')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// })
