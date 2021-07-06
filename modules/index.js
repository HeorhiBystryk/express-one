const createHealthModule = require('./healthz');

function createModules() {
    const healthModule = createHealthModule();

    return [healthModule]
}

module.exports = createModules;