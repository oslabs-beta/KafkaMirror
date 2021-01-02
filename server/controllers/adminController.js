const createInstance = require("../kafkaInstance");
// console.log(kafka);
// const kafka = createInstance(9092);
// console.log("kafka instance:", kafka);

const adminController = {};

async function connection(port) {
  const kafka = await createInstance(port);
  const admin = kafka.admin();
  await admin.connect();
  return admin;
}

adminController.requestTopics = async (req, res, next) => {
  const admin = await connection(res.locals.livePort);
  const topicArr = await admin.listTopics();
  res.locals.topicArr = topicArr;
  await admin.disconnect();
  next();
};

adminController.getTopicMetadata = async (req, res, next) => {
  const admin = await connection(res.locals.livePort);
  topicArr = res.locals.topicArr;
  const topicMetadataArr = await admin.fetchTopicMetadata({ topics: topicArr });
  res.locals.topicMetadataArr = topicMetadataArr;
  await admin.disconnect();
  next();
};

adminController.requestGroups = async (req, res, next) => {
  const admin = await connection(res.locals.livePort);
  const groupArr = await admin.listGroups();
  res.locals.groupArr = groupArr;
  await admin.disconnect();
  next();
};

adminController.describeGroups = async (req, res, next) => {
  const admin = await connection(res.locals.livePort);
  const groupList = res.locals.groupArr.groups.map((group) => group.groupId);
  const groupDetails = await admin.describeGroups(groupList);
  res.locals.groupDetails = groupDetails;
  await admin.disconnect();
  next();
};

adminController.describeCluster = async (req, res, next) => {
  const admin = await connection(res.locals.livePort);
  const clusterDetails = await admin.describeCluster();
  res.locals.clusterDetails = clusterDetails;
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
