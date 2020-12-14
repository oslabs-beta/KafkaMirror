const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

//localhost:8080/api/topicList
router.get("/topicList", adminController.requestTopics, (req, res) => {
  res.status(200).json(res.locals.topicArr);
});

router.get(
  "/allTopicMetadata",
  adminController.requestTopics,
  adminController.getTopicMetadata,
  (req, res) => {
    res.status(200).json(res.locals.topicMetadataArr);
  }
);

module.exports = router;
