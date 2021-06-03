// This is the entry point of the lambda. Initial entry & Final response are handled in this file.

'use strict'
var controller = require('./controllers/controller');

exports.handler = (event, context, cb) => {
//function createOpportunity() {
    // let dataToBePublished = {
    //     "Name": "Test from Lambda",
    //     "CloseDate": "2018-08-01",
    //     "StageName": "New",
    //     "Probability": "10",
    //     "Amount": "2000"
    // };
    let dataToBePublished = event;
    controller.createOpportunity(dataToBePublished, function (err, data) {
        if (!err) {
            cb(null, { data });
            //console.log(data);
        } else {
            cb(err);
            //console.log(err);
        }
    })
}


//createOpportunity();