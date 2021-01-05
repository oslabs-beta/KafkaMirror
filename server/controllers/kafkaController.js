// const createInstance = require("../kafkaInstance");
// let kafka;

// let livePort;
let livePort;

const kafkaController = {};

kafkaController.setServerLocation = (req, res, next) => {
  // kafka = createInstance(9092);
  // console.log("kafka instance:", kafka);
  console.log(req.body);
  
  livePort = parseInt(req.body.portNumber);
  res.locals.livePort = livePort;
  // console.log(res.locals.instance);
  // console.log(typeof kafka);
  next();
};

kafkaController.getServerLocation = (req, res, next) => {
  res.locals.livePort = livePort;
  next();
};

module.exports = kafkaController;
