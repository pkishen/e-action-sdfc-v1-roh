// This is the entry point of the lambda. Initial entry & Final response are handled in this file.
'use strict'
var controller = require('./controllers/controller');

exports.handler = (event, context, cb) => {
//function getUsersPerPage() {
    let input = event;
    controller.callStepFunction(input, function (err, data) {
        if (!err) {
            //console.log("called step function")
            cb(null, data);
        } else {
            //console.log("error calling step function");
            cb(err);
        }
    })
}

//getUsersPerPage();



