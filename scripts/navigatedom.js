function logCells() {
  // Get all td elements inside the table within the div with id "root"
  // Gives us all elements in DOM with this query
  // All with ID root, that are (in a) table, (& in a) tr, (& a) td
  var tdElements = document.querySelectorAll('#root table tr td');
  // Log the td elements
  // pass function to for loop; function takes element and index
  tdElements.forEach(function(td, index) { 
    console.log(` ==== Index === ${index}`);
    console.log(`Node Type = ${td.childNodes[0].nodeType}`);
    console.log(`Node Value = ${td.childNodes[0].nodeValue}`);
    console.log(`Node innerHTML = ${td.innerHTML}`);
    console.log(`Node text = ${td.textContent}`);
  });

}
