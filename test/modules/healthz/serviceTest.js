const expect = require('chai').expect;
const createService = require('../../../modules/healthz/service')

describe('Healthz service', function() {
    it('Should successful do nothing', async function() {
        const service = createService();
        const response = await service.healthzCheck();
        expect(response).equal('Service is ok...');
    }).timeout(3000);
});
