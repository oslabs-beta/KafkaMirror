const express = require("express");
const io = require("socket.io-client");

const app = express();
const apiRouter = require("./routes/api");

// REFACTOR TO ROUTE WEBSOCKET TO CLIENT FROM SERVER

// Parse incoming requests
app.use(express.json());

// Routes to access the Kafka Admin Client using KafkaJS node package
app.use("/api", apiRouter);

// Server listening on port 3000
app.listen(3000, () => console.log(`Server listening on 3000.`));
