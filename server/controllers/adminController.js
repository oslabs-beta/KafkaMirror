const kafka = require("../kafkaInstance");

const adminController = {};

adminController.requestTopics = async (req, res, next) => {
  const admin = kafka.admin();
  await admin.connect();
  const topicArr = await admin.listTopics();
  res.locals.topicArr = topicArr;
  await admin.disconnect();
  next();
};

adminController.getTopicMetadata = async (req, res, next) => {
  const admin = kafka.admin();
  await admin.connect();
  topicArr = res.locals.topicArr;
  const topicMetadataArr = await admin.fetchTopicMetadata({ topics: topicArr });
  res.locals.topicMetadataArr = topicMetadataArr;
  await admin.disconnect();
  next();
};

adminController.requestGroups = async (req, res, next) => {
  const admin = kafka.admin();
  await admin.connect();
  //   const groupArr = await admin.listGroups();
  //   const groupArr = await admin.describeGroups(["paella"]);
  //   const groupArr = await admin.describeGroups(["transactions"]);
  const groupArr = await admin.describeGroups(["ass"]);
  //   const groupArr = await admin.describeGroups([
  //     "randomtopicnamefortopicthatdoesntexist",
  //   ]);
  res.locals.groupArr = groupArr;
  await admin.disconnect();
  next();
};

module.exports = adminController;

// const clusters = await admin.describeCluster();
// console.log(clusters);
// console.log(JSON.stringify(await admin.describeGroups(['user']), null, 2));
// const topicList = await admin.listTopics();
// const topicMetadata = await admin.fetchTopicMetadata({ topics: ["user"] });
// const topicMetadata = await admin.fetchTopicMetadata({ topics: ["user"] });
