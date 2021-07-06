const createController = require('./controller')
const createRouter = require('./router')
const createService = require('./service')

function createModule() {
    const service = createService()
    const controller = createController({ service })
    const router = createRouter({ controller })

    return {
        controller,
        router,
        service,
    }
}

module.exports = createModule
