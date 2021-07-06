const { BadRequestException } = require("../../middleware/exception.handler");

function createController({ service }) {
    const healthzCheck = async (req, res, next) => {
        try {
            await service.healthzCheck()
            throw new BadRequestException('АЛЯРМА!')
            return res.status(200).json('App is running...')
        } catch (error) {
            next(error)


        }
    }

    return {
        healthzCheck,
    };
}

module.exports = createController;

