class BadRequestException extends Error {
    statusCode = 400
    message = 'Bad request!'

    constructor(message) {
        super()
        if (message) this.message = message
    }
}

class NotFoundExceptionException extends Error {
    statusCode = 404
    message = 'Entity not found!'

    constructor(message) {
        super()
        if (message) this.message = message
    }
}

class AuthorisationException extends Error {
    statusCode = 401
    message = 'Not enough rights!'

    constructor(message) {
        super()
        if (message) this.message = message
    }
}

const exceptionHandler =
    (error, req, res, next) => {
        const {statusCode, message} = error;
        res.status(statusCode).json({
            statusCode,
            message
        });
    };

module.exports = {
    BadRequestException,
    exceptionHandler
}
