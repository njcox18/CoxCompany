$(function(){

  var $learnMore = $('.learn-more'),
      $learnContent = $('.learn-content'),
      $modal = $('.modal'),
      $modalClose = $('.modal-close');

  $learnMore.on('click', function() {
    var $this = $(this);

    var name = $this.data('name');

    $learnContent.each(function(){
      var $that = $(this);
      var contentName = $that.data('name');
        if (name === contentName) {
          $that.addClass('active');
          $modal.addClass('is-active');
        }
    });

    $modalClose.on('click', function(){
      $learnContent.removeClass('active');
      $modal.removeClass('is-active');
    });


        
  });

      


});