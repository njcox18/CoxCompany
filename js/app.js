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


});