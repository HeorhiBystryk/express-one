const {v4: uuidv4} = require('uuid')

const trace = (req, res, next) => {
        req.srvTriggerTime = new Date();
        req.srvTraceId = uuidv4();
        next();
    }

module.exports = trace;