//define functions here
function getIt(){
$('p').on("spy", function(){
 alert("Hey!");
});
}

function frameIt(){
  $('img').on('load', function(){
tasty
});
  //  The function should bind the load event that adds the class tasty to the image to add a red frame to the image.
}

function pressIt(){
  $(input).on('keydown', function(key) {
  if(key.which == 86){
      alert('G was pressed');
  } else {
    alert("another key was pressed");
  }
});
}

function submitIt(){
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now');
    return;
  } else {
  alert("you entered the wrong value");
  }
  return;
});
  // The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".
}

$(document).ready(function(){

// call functions here

});
