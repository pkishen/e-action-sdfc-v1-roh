// This file contains methods to interact with Salesforce
const request = require('request-promise');
//const token = 'Bearer 00D5g000005GCIC!ARMAQC5Ao4A3cOiaX.xovzOYNN1RkK9BxBiOG5tIuKDEMxJ4qJTh.95_jVupwbabffdIP2RHncwtEHp5WhfsIKeYpSepjVAw';
const token = process.env.salesforceToken;
const salesforceURL = process.env.salesforceURL;

function createOpportunity(obj) {
    return new Promise(function (resolve, reject) {
        var uri = salesforceURL + "/services/data/v51.0/sobjects/opportunity";
        request(
            {
                method: 'POST',
                uri: uri,
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }
        ).then((data) => {
            resolve(JSON.parse(data));
        }).catch((err) => {
            
            reject(err);
        });
    })
}

module.exports = {
    createOpportunity
}

