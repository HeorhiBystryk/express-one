function createService() {
    const healthzCheck = async () => {
        await sleep(2000)
        return 'Service is ok...'
    }

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    return {
        healthzCheck
    }
}

module.exports = createService
