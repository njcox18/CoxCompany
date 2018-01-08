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


});