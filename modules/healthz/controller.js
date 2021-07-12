function createController({ service }) {
    const healthzCheck = async (req, res, next) => {
        try {
            await service.healthzCheck()




            return res.status(200).json('App is running...')
        } catch (error) {
            next(error)
        }
    }

    return {
        healthzCheck,
    }
}

module.exports = createController
