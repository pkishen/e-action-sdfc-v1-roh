// This is the domain layer, would contain all the business logic
const common = require('../helpers/common/common');


var callStepFunction = function (input, cb) {
    common.callStepFunction(input)
        .then(function () {
            cb(null, "Step function executed");
        }).catch(function (err) { 
            cb(null, err);
        })

}

module.exports = {
    callStepFunction
};