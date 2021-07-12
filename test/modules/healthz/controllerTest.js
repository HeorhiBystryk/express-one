const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
const createController = require('../../../modules/healthz/controller')
const createService = require('../../../modules/healthz/service')
chai.use(spies);

describe('Healthz controller', function () {
    it('Should successful do nothing', async () => {
        const service = createService();
        const serviceSpy = chai.spy.on(service, "healthzCheck", () => {});

        const controller = createController({service: service});
        const next = () => {
        }
        const res = mockResponse()

        await controller.healthzCheck({}, res, next);
        expect(serviceSpy).to.have.been.called.once;
        expect(res.status).to.have.been.called.once.with(200);
        expect(res.json).to.have.been.called.once.with('App is running...');
    });

    const mockResponse = () => {
        const res = {}
        res.status = chai.spy.on(res, "status", () => res);
        res.json = chai.spy.on(res, "json", () => res);
        return res;
    };

});
