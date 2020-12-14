const kafka = require("../kafkaInstance");

const adminController = {};

adminController.requestProducers = async (req, res, next) => {
  console.log("request producers called");
  const admin = kafka.admin();
  await admin.connect();
  console.log("admin connected");

  const topicMetadata = await admin.listTopics();

  console.log(JSON.stringify(topicMetadata, null, 2));
  res.locals.payload = topicMetadata;

  await admin.disconnect();
  next();
};

module.exports = adminController;

// const clusters = await admin.describeCluster();
// console.log(clusters);
// console.log(JSON.stringify(await admin.describeGroups(['user']), null, 2));
// const topicList = await admin.listTopics();
// const topicMetadata = await admin.fetchTopicMetadata({ topics: ["user"] });
