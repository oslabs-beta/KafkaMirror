const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  // confirm clientId
  clientId: "kafkamirror",
  brokers: ["localhost:9092"],
});

console.log(kafka);

module.exports = kafka;
