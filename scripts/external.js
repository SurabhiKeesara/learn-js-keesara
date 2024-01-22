document.getElementById("demo").textContent = "A paragraph";
function myFunction() {
    // with .textContent, has to be a string
    // with .innerHTML, just converts to string
    document.getElementById("demo").textContent = "Paragraph changed after click.";
}