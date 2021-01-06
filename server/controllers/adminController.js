const createInstance = require("../kafkaInstance");

const adminController = {};

// Lower order function used to create a new connection to specified broker of the running Kafka instance
// using the Kakfa Admin API and KafkaJS
async function connection(port) {
  const kafka = await createInstance(port);
  const admin = kafka.admin();
  await admin.connect();
  return admin;
}

// All of the below functions connect to the Admin API through the "connection" function

// Pull all topics stored in specified Kafka instance (events are organized and durably stored in topics)
adminController.requestTopics = async (req, res, next) => {
  const admin = await connection(res.locals.livePort);
  const topicArr = await admin.listTopics();
  res.locals.topicArr = topicArr;
  await admin.disconnect();
  next();
};

// Pull information such as topic-level partition information from all topis stored in specified Kafka
// instance (partitions are used to divide and organize the events sent to each topic, e.g. topic
// subdivisions)
adminController.getTopicMetadata = async (req, res, next) => {
  const admin = await connection(res.locals.livePort);
  topicArr = res.locals.topicArr;
  const topicMetadataArr = await admin.fetchTopicMetadata({ topics: topicArr });
  res.locals.topicMetadataArr = topicMetadataArr;
  await admin.disconnect();
  next();
};

// Pull list of consumer groups that have been stored and associated with the specified broker
adminController.requestGroups = async (req, res, next) => {
  const admin = await connection(res.locals.livePort);
  const groupArr = await admin.listGroups();
  res.locals.groupArr = groupArr;
  await admin.disconnect();
  next();
};

// Provides details on the consumer groups (e.g., what partition they subscribe to)
adminController.describeGroups = async (req, res, next) => {
  const admin = await connection(res.locals.livePort);
  const groupList = res.locals.groupArr.groups.map((group) => group.groupId);
  const groupDetails = await admin.describeGroups(groupList);
  res.locals.groupDetails = groupDetails;
  await admin.disconnect();
  next();
};

// Currently used; provides details on the Kafka instance as a whole (e.g., number of brokers and
// associated ports)
adminController.describeCluster = async (req, res, next) => {
  const admin = await connection(res.locals.livePort);
  const clusterDetails = await admin.describeCluster();
  res.locals.clusterDetails = clusterDetails;
  await admin.disconnect();
  next();
};

module.exports = adminController;
