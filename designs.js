var grid = $("#pixelCanvas")
var mouseDown = false

//function for fade-in effect
window.onload = function() {
  $("body").removeClass("fade-out");
}

function makeGrid() {
  //clear existing grid cells
  grid.children().remove();
  //sets the rows and columns to match the value user has entered
  var rows = $("#inputHeight").val()
  var cols = $("#inputWeight").val()
  //for loop that builds the Grid
  for (var r = 1; r <= rows; r++) {
    var tr = $("<tr></tr>");
    grid.append(tr);
    for (var c = 1; c <= cols; c++) {
      var td = $("<td></td>");
      tr.append(td);
    }
  }
};
//call makeGrid and prevent submit button from reloading the page
$("#sizePicker").submit(function(event) {
  event.preventDefault();
  makeGrid();
})

// change the color of cells
grid.on("mousedown", "tr td", function() {
  var color = $("#colorPicker").val();
  $(this).css("background-color", color);
});

// allow changing colors while mousdown and mousemove both true
$(document).mousedown(function() {
  mouseDown = true;
});
$(document).mouseup(function() {
  mouseDown = false
});
grid.on("mouseover", "tr td", function() {
  if(mouseDown) {
    var color = $("#colorPicker").val();
    $(this).css("background-color", color);
  }
});

//make a right-click act as an eraser
grid.on("contextmenu", "tr td", function() {
  $(this).css("background-color", "#fff");
});

//prevent the menu from appearing on right-click
$("#pixelCanvas").on("contextmenu", function(event) {
  event.preventDefault();
});
