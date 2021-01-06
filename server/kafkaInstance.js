const { Kafka } = require("kafkajs");

// Default to inactive port, allows us to connect and pull information from multiple brokers if configured
const createInstance = (brokers = 9090) => {
  if (!Array.isArray(brokers)) brokers = [brokers];
  // Convert brokers input into correct format
  brokers = brokers.map((broker) => {
    if (typeof broker === "number") return `localhost:${broker}`;
    return broker;
  });

  return new Kafka({
    // Confirm clientId
    clientId: "kafkamirror",
    brokers,
  });
};

module.exports = createInstance;
