function setColor(set) {
    let changeColor = set;
    console.log(changeColor);
    return function() {
        if(changeColor) {
            let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
    }
    // by returning a closure (function) here, we set onclick to an actual function
    // otherwise, we weren't returning anything, the function did some activity but did not output
    // onClick expects a closure - expects something to be returned
    // no closure - there is no function to invoke
    // onclick expects an 'executable' function 
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}
