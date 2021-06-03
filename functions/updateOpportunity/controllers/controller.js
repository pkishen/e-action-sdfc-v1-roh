// This is the controller layer, would contain validations etc 

var domain = require('../domain/domain');

module.exports = {
    updateOpportunity
}

function updateOpportunity(dataToBePublished, cb) {
    domain.updateOpportunity(dataToBePublished, function (err, data) {
        if (!err) {
            cb(null, data);
        } else {
            cb(err);
        }
    })
}