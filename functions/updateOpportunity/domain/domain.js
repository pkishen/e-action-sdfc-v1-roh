// This is the domain layer, would contain all the business logic

const salesForceHelper = require('../helpers/clients/salesforce');

var updateOpportunity = function (dataToBePublished, cb) {
    salesForceHelper.updateOpportunity(dataToBePublished)
        .then(response => {
            cb(null, response);
        })
        .catch(error => {
            cb(error);
        })
}

module.exports = {
    updateOpportunity
};