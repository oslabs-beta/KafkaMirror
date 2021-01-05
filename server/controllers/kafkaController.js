const kafkaController = {};

// Active broker port; initialized as undefined prior to specification
let livePort;

// Update livePort to specified broker location
kafkaController.setServerLocation = (req, res, next) => {
  livePort = parseInt(req.body.portNumber);
  res.locals.livePort = livePort;
  next();
};

// Retrieve broker location set by the user
kafkaController.getServerLocation = (req, res, next) => {
  res.locals.livePort = livePort;
  next();
};

module.exports = kafkaController;
