document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

$(function(){

  var prev = 0;
  var $window = $(window);
  var $nav = $('.navbar');
  var $html = $('html');

    $window.on('scroll', function () {
      var scrollTop = $window.scrollTop();
      $nav.toggleClass('is-fixed-top', scrollTop > prev);
      $html.toggleClass('has-navbar-fixed-top', scrollTop > prev);
      prev = scrollTop;
    });




var URL = 'https://swcbn3n8pl.execute-api.us-east-2.amazonaws.com/Live_1/message'
 
$('#contact-form').submit(function (event) {
  event.preventDefault()
 
  var data = {
    name: $('#name-input').val(),
    email: $('#email-input').val(),
    description: $('#message-input').val()
  }
 
  $.ajax({
    type: 'POST',
    url: URL,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function () {
      // clear form and show a success message
    },
    error: function () {
      // show an error message
    }
  })
})




});