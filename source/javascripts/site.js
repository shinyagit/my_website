$(document).ready(function(){
  $('#menu-btn').on('click', function(){
    if ($(this).hasClass('close')) {
      $('#header-nav').removeClass('slide-in');
      $(this).removeClass('close');
    } else {
      $(this).addClass('close');
      $('#header-nav').addClass('slide-in');
    }
  });
});
