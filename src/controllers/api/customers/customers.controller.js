const customerRepo = require('../../../lib/customersRepository'),
      statesRepo = require('../../../lib/statesRepository'),
      util = require('util');

class CustomersController {
    // /api/customers
    constructor(router) {
        router.get('/', this.getCustomers.bind(this));
        router.get('/{id}', this.getCustomerById(id).bind(this))
    }


    getCustomers(req, res) {
        console.log('*** getCustomers');
        customerRepo.getCustomers((err, data) => {
            if (err) {
                console.log('*** getCustomers error:' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getCustomers ok');
                res.json(data.getCustomers);
            }
        });
    }

    getCustomerById(id) {
        console.log('*** getCustomerById');
        customerRepo.getCustomer(id, (err, data) => {
            if(err) {
                console.log('*** getCustomerById error:' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getCustomerById ok')
                res.json(data);
            }
        });
    }
}

module.exports = CustomersController;