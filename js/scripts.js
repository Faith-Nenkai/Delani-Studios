$(document.forms).ready(function () {
  $('img#icon1').click(function () {
    $('img#icon1').hide();
    $('p#p1').show();
  });
  $('p#p1').click(function () {
    $('p#p1').hide();
    $('img#icon1').show();
  });

  $('img#icon2').click(function () {
    $('img#icon2').hide();
    $('p#p2').show();
  });
  $('p#p2').click(function () {
    $('p#p2').hide();
    $('img#icon2').show();
  });

  $('img#icon3').click(function () {
    $('img#icon3').hide();
    $('p#p3').show();
  });
  $('p#p3').click(function () {
    $('p#p3').hide();
    $('img#icon3').show();
  });
  $('img#w1').hover(function(){
$('img#w1').slideToggle('slow');
  });
  $('img#w2').hover(function(){
    $('img#w2').slideToggle('slow');
      });
      $('img#w3').hover(function(){
        $('img#w3').slideToggle('slow');
          });
          $('img#w4').hover(function(){
            $('img#w4').slideToggle('slow');
              });
              $('img.last').hover(function(){
                $('img.last').slideToggle('slow');
                  });
                  $('img#w5').hover(function(){
                    $('img#w5').slideToggle('slow');
                      });
                      $('img#last').hover(function(){
                        $('img#last').slideToggle('slow');
                          });
});

document.forms['form'].addEventListener('submit', function (event) {
  event.preventDefault();
});
function checkBlank() {
  var name = document.forms['form'].elements[0].value;
  var email = document.forms['form'].elements[1].value;
  if (name == "" && email == "") {
    alert("Enter your details");
  }
  else if (name == "") {
    alert("Enter a valid name");
  }
  else if (email == "") {
    alert("Please enter a valid email");
  }
  else {
    alert( "Dear "+ name + " Your information was successfully submitted");
    document.getElementById('para').innerHTML ="Dear "+ name + " Your information was successfully submitted.Thank you."
  }
}