// This is the common file, would have any common function needed in the lambda

const AWS = require('aws-sdk');
const stepFunction = new AWS.StepFunctions();
const stateMachineArn = process.env.stepFunctionToBeCalled;


function callStepFunction(input) {
    var params = {
        stateMachineArn: stateMachineArn,
        input: JSON.stringify(input)
    }

    return stepFunction.startExecution(params).promise().then(() => {
        return true;
    })

}

module.exports = {
    callStepFunction
}