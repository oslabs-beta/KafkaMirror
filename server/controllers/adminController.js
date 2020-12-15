const createInstance = require('../kafkaInstance');
const kafka = createInstance(9092);
console.log('kafka instance:', kafka);
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
  const groupArr = await admin.listGroups();

  res.locals.groupArr = groupArr;
  await admin.disconnect();
  next();
};

adminController.describeGroups = async (req, res, next) => {
  const groupList = res.locals.groupArr.groups.map((group) => group.groupId);
  console.log(groupList);
  const admin = kafka.admin();
  await admin.connect();
  const groupDetails = await admin.describeGroups(groupList);

  res.locals.groupDetails = groupDetails;
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
