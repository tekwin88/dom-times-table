document.getElementById("generate").addEventListener("click", generate);

function generate() {
  var existingTable = document.getElementsByTagName("table");

  if (existingTable.length !== 0) {
    document.body.removeChild(existingTable[0]);
  }

  var number = document.getElementById("UserInput").value;
  var table = document.createElement("table");          //Generate table
  table.style = "border-collapse: collapse";
  var script = document.getElementsByTagName("script"); //Reference point for insertBefore

  // console.log("This is userInput passed down " + number);;

  for (j=1; j<number ; j++) {
    var tr = document.createElement("tr");             //Generate rows for table
      if (j%2 == 1) {
          tr.style = "background-color:lightblue";
      }
      for (i=1; i<number ; i++) {
          var td = document.createElement("td");       //Generate cells for table
              td.textContent = i*j ;                   //Populate cells
              td.style.border = "1px solid black";
              tr.appendChild(td);                      //Append cells into rows
      }
      table.appendChild(tr);                           //Append rows into table
  }
  document.body.insertBefore(table, script[script.length-1])
}
