var color = $( "#colorPicker" ).val();
var mouseDown = 0;
document.body.onmousedown = function() {
  mouseDown = 1;
};
document.body.onmouseup = function() {
  mouseDown = 0;
};

$(document).ready(function() {
  $("sizePicker").submit(function makeGrid(grid) {
    $('table tr').remove();
    var rows = $( '#inputHeight' ).val();
    var columns = $( '#inputWeight' ).val();
    for (var c = 1; columns; c++) {
      $("pixelCanvas").append('<tr></tr>');
      for (var r = 1; rows; r++) {
        $("tr").last().append('<td></td>');
      }
    }
    $("pixelCanvas").css("border", "black")
    grid.preventDefault();
}));

// Select color input
$("#colorPicker").on("change", function(){
  var color = $("#colorPicker.val()")
});

//set color
$("#pixelCanvas").on("click","td", function(){
  var color = $("colorPicker.val()");
  $(this).css("background-color", color);
});

$("td").mouseenter(function(){
  if(mouseDown){
    $(this).css("background-color", colorPicker.value);
  }
});
