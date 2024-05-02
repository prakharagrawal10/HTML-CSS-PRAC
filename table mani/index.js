document.addEventListener("DOMContentLoaded", function() {
    var rows = document.querySelectorAll("#myTable tbody tr");
  
    rows.forEach(function(row, index) {
      // Even odd row background color
      if (index % 2 === 0) {
        row.style.backgroundColor = "green";
      } else {
        row.style.backgroundColor = "red";
      }
  
      // Hover effect
      row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "aqua";
      });
  
      row.addEventListener("mouseout", function() {
        // Restore even odd row background color
        if (index % 2 === 0) {
          row.style.backgroundColor = "green";
        } else {
          row.style.backgroundColor = "red";
        }
      });
  
      // Odd column background color
      var cells = row.querySelectorAll("td");
      cells.forEach(function(cell, cellIndex) {
        if (cellIndex % 2 === 0) {
          cell.style.backgroundColor = "yellow";
        }
      });
    });
  });
  