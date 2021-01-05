const express = require("express");

const adminController = require("../controllers/adminController");
const kafkaController = require("../controllers/kafkaController");

const router = express.Router();

//localhost:8080/api/topicList
router.get(
  "/topicList",
  kafkaController.getServerLocation,
  adminController.requestTopics,
  (req, res) => {
    res.status(200).json(res.locals.topicArr);
  }
);

//localhost:8080/api/allTopicMetadata
router.get(
  "/allTopicMetadata",
  kafkaController.getServerLocation,
  adminController.requestTopics,
  adminController.getTopicMetadata,
  (req, res) => {
    res.status(200).json(res.locals.topicMetadataArr);
  }
);

//localhost:8080/api/groupList
router.get(
  "/groupList",
  kafkaController.getServerLocation,
  adminController.requestGroups,
  (req, res) => {
    res.status(200).json(res.locals.groupArr);
  }
);

//localhost:8080/api/describeGroups
router.get(
  "/describeGroups",
  kafkaController.getServerLocation,
  adminController.requestGroups,
  adminController.describeGroups,
  (req, res) => {
    res.status(200).json(res.locals.groupDetails);
  }
);

//localhost:8080/api/describeCluster
router.get(
  "/describeCluster",
  kafkaController.getServerLocation,
  adminController.describeCluster,
  (req, res) => {
    res.status(200).json(res.locals.clusterDetails);
  }
);

//localhost:8080/api/setPort
router.post(
  "/setPort",
  kafkaController.setServerLocation,
  (req, res) => {
    res.status(200).json(res.locals.livePort);
  }
);

module.exports = router;
