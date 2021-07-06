const logger = require("../utils/logger")

const createLoggerMiddleware =
    (req, res, next) => {
        res.on('finish', () => {
            if (res.statusCode < 400) {
                logRequestFinished('info')
            } else if (res.statusCode < 500) {
                logRequestFinished('warn')
            } else {
                logRequestFinished('error')
            }
        })
        next();

        function logRequestFinished(level) {
            return logger.log(level, `TIME:${req.srvTriggerTime.toISOString()}; REQUEST ID:${req.srvTraceId}; REQUEST URL:${req.url} RESPONSE CODE: ${res.statusCode}; CLIENT IP: ${getClientIp()}; PROCESSING TIME: ${getProcessingTime()}ms`)
        }

        function getClientIp() {
            return req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress
        }

        function getProcessingTime() {
            return new Date() - req.srvTriggerTime
        }

    }

module.exports = createLoggerMiddleware;
