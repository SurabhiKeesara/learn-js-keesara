window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction); // closure
    x.addEventListener('click', mySecondFunction); // adding multiple event listeners
    // if 'click' has another function, then would be executed consecutively in order defined
    x.addEventListener('mouseout', myThirdFunction);
}

function myFunction() {
    document.getElementById('demo').textContent = 'Moused over!';
}

function mySecondFunction() {
    document.getElementById('demo').textContent = 'Clicked!';
}

function myThirdFunction() {
    document.getElementById('demo').textContent = 'Moused out!';
}