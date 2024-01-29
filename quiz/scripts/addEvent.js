window.onload = function() {
    let x = document.getElementById('myBtn');
    // alternative_1: remove '() =>' from each statement
    x.addEventListener('mouseover', () => myFunction('Moused over!'));
    x.addEventListener('click', () => mySecondFunction('Clicked!'));
    x.addEventListener('mouseout', () => myThirdFunction('Moused out!'));
}

// alternative_1: 'return () =>'

function myFunction(msg) {
    document.getElementById('demo').textContent = msg;
}

function mySecondFunction(msg) {
    document.getElementById('demo').textContent = msg;
}

function myThirdFunction(msg) {
    document.getElementById('demo').textContent = msg;
}
