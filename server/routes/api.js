const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

//localhost:8080/api/topicList
router.get('/topicList', adminController.requestTopics, (req, res) => {
  res.status(200).json(res.locals.topicArr);
});

//localhost:8080/api/allTopicMetadata
router.get(
  '/allTopicMetadata',
  adminController.requestTopics,
  adminController.getTopicMetadata,
  (req, res) => {
    res.status(200).json(res.locals.topicMetadataArr);
  }
);

//localhost:8080/api/groupList
router.get('/groupList', adminController.requestGroups, (req, res) => {
  res.status(200).json(res.locals.groupArr);
});

//localhost:8080/api/describeGroups

router.get(
  '/describeGroups',
  adminController.requestGroups,
  adminController.describeGroups,
  (req, res) => {
    res.status(200).json(res.locals.groupDetails);
  }
);

router.get('/describeCluster', adminController.describeCluster, (req, res) => {
  res.status(200).json(res.locals.clusterDetails);
});

module.exports = router;
