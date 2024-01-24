function makeFunc() {
    const name = 'Mozilla';
    function dispName() {
        console.log(name);
    }
    return dispName; // returns body of function and lexical scope
    // dispName();
}

const f = makeFunc();
//can execute function outside of scope
// f is console.log(name) and name = ...
    // the body of the function (dispName body)
    // the lexical scope of the function (name)
// f is a closure, not a function
f(); // equivalent of dispName()