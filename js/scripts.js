$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#voters').show();
  }
  if (age < 18) {
    $('#minors').show();
  }
});
