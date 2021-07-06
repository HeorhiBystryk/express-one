const {Router} = require('express')

function createRouter({controller}) {
    const router = Router();

    router.get('/healthz', controller.healthzCheck);

    return router;
}

module.exports = createRouter;