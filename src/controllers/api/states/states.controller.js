const statesRepo = require('../../../lib/statesRepository'),
      util = require('util');

class StatesController {

    constructor(router) {
        router.get('/', this.getStates.bind(this));
        router.get('/:id', this.getState.bind(this));
    }

    getStates(req, res) {
        console.log('*** getStates');
        statesRepo.getStates((err, states) => {
            if (err) {
                console.log('*** getStates error' + util.inspect(err));
                res.json(null)
            } else {
                console.log('*** getStates ok');
                res.json(states);
            }
        });
    }

    getState(req, res) {
        console.log('*** getState');
        const stateId = req.params.id;
        statesRepo.getStates(stateId, (err, state) => {
            if (err) {
                console.log('*** getState error' + util.inspect(err));
                res.json(null)
            } else {
                console.log('*** getState ok');
                res.json(state);
            }
        });
    }
}

module.exports = StatesController;