const { Kafka } = require("kafkajs");

// expects an array of broker addresses
// const kafka = (brokers) => {
//   // convert brokers into correct format
//   brokers = brokers.map((broker) => {
//     if (broker.includes('http')) return broker;
//     if (broker.includes('localhost')) return broker;
//     return `localhost:${brokers}`;
//   });

//   return new Kafka({
//     // confirm clientId
//     clientId: 'kafkamirror',
//     brokers,
//     // brokers: ["localhost:9092"],
//   });
// };

const createInstance = (brokers = 9092) => {
  if (!Array.isArray(brokers)) brokers = [brokers];
  // convert brokers into correct format
  brokers = brokers.map((broker) => {
    if (typeof broker === "number") return `localhost:${broker}`;
    return broker;
    // if (broker.includes('http')) return broker;
    // if (broker.includes('localhost')) return broker;
  });

  return new Kafka({
    // confirm clientId
    clientId: "kafkamirror",
    brokers,
    // brokers: ["localhost:9092", localhost:9093],
  });
};

// module.exports = new Kafka({
//   // confirm clientId
//   clientId: 'kafkamirror',
//   // brokers,
//   brokers: ['localhost:9092'],
// });
// const kafka = createInstance(9092);

module.exports = createInstance;
