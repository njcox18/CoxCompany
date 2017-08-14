$(function(){

  var $mechanical = $('#mechanical'),
      $sheet      = $('#sheetmetal'),
      $mechanicalContent = $('.mechanical-content'),
      $sheetContent = $('.sheetmetal-content');

      $mechanical.on('click', function(){
        $mechanicalContent.addClass('active');
        $sheetContent.removeClass('active');
        $mechanical.addClass('is-active');
        $sheet.removeClass('is-active');
      });
      $sheet.on('click', function(){
        $sheetContent.addClass('active');
        $mechanicalContent.removeClass('active');
        $sheet.addClass('is-active');
        $mechanical.removeClass('is-active');
      });

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