$(document).ready(function() {
  $("#nellieImg,#tributePage").mouseenter(function() {
    $("#tributePage").toggle();
  }).mouseleave(function() {
    $("#tributePage").hide();
  });
});

$(document).on('click', '.navbar-collapse.in', function(e) {
  if ($(e.target).is('a')) {
    $(this).collapse('hide');
  }
});
