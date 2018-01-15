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
      // prev = scrollTop;
    });



    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        var offset;
        if (target === '#home') {
          offset = 0;
        } else {
          offset = $target.offset().top - 151;
        }
        $('html, body').stop().animate({
            'scrollTop':  offset
        }, 900, 'swing', function () {
            // window.location.hash = target;
        });
    });




});