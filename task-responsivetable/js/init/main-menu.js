$('.mobile-menu-btn').on('click', function() {
  $(this).toggleClass('active');
  $('.bar').toggleClass(function() {
    if ($(this).is('.open, .close')) {
      return 'open close';
    } else {
      return 'open';
    }
  });
  $('.main-menu').toggleClass('active');
  $('main').toggleClass('offset');
});
