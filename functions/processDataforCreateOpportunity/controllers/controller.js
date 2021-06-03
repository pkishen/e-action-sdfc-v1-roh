// This is the controller layer, would contain validations etc 

var domain = require('../domain/domain');

module.exports = {
    callStepFunction
}

function callStepFunction(input, cb) {
    domain.callStepFunction(input, function (err, data) {
        if (!err) {
            cb(null, data);
        } else {
            cb(err);
        }
    })
}