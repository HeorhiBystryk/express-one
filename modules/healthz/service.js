function createService() {
    const healthzCheck = async () => {
        await sleep(2000);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return {
        healthzCheck,
    };
}

module.exports = createService;
