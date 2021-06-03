// This is the controller layer, would contain validations etc 

var domain = require('../domain/domain');

module.exports = {
    createOpportunity
}

function createOpportunity(dataToBePublished, cb) {
    domain.createOpportunity(dataToBePublished, function (err, data) {
        if (!err) {
            cb(null, data);
        } else {
            cb(err);
        }
    })
}