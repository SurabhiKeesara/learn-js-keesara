window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  txt.id = txtNode;
  return txtNode;
}

function createButtonNode(btnTxt, event, listener) {
  let button = document.createElement("button");
  let btnNodeText = createTxtNode(btnTxt);
  button.appendChild(btnNodeText);
  button.addEventListener(event, listener);
  return button;
}

function makeInput() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createButtonNode("Edit Text", "click", function() {
      edit(col1);
    }));
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}

function edit(node) {
  let inputNode = document.createElement("input");
  inputNode.type = 'text';
  inputNode.placeholder = "Enter Cell (x,y) ...";
  node.replaceChild(inputNode, node.childNodes[0]);
}
