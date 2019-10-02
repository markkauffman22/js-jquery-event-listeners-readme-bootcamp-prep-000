//define functions here

function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  console.log('In fn frameIt');
  $('img').on('load', function() {
    $('img').addClass('tasty');
    console.log('in loadIt');
    console.log(' Why does this not print?? Tests still pass.');

  });
  // this adds the class 'tasty' on click though ...
  $('img').on('click', function() {
    $('img').addClass('tasty');
    console.log("Added 'tasty'");
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == 71){
        alert('g was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
    return;
  });
}

// call functions here
$(document).ready(function(){

  getIt();

  frameIt();

  pressIt();

  submitIt();

});
