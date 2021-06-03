// This is the domain layer, would contain all the business logic

const salesForceHelper = require('../helpers/clients/salesforce');

var createOpportunity = function (dataToBePublished, cb) {
    salesForceHelper.createOpportunity(dataToBePublished)
        .then(response => {
            cb(null, response);
        })
        .catch(error => {
            cb(error);
        })
}

module.exports = {
    createOpportunity
};