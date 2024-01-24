sampleErrMsgApply = {
    errMsg: "This is an error apply"
}

sampleErrMsgCall = {
    errMsg: "This is an error call"
}

// PARENT OBJECT IMPL

// const hasErrMsg = {
//     logMsg: function() {
//         console.log(this.errMsg)
//     }
// }

// hasErrMsg.logMsg.call(sampleErrMsgCall);
// hasErrMsg.logMsg.apply(sampleErrMsgApply)

// NO PARENT OBJ IMPL

function logMsg() {
    console.log(this.errMsg)
}

logMsg.call(sampleErrMsgCall);
logMsg.apply(sampleErrMsgApply)