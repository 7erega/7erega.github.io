var fixedMenu;

fixedMenu = function() {
  var fixedMenuHeight, headerHeight;
  headerHeight = $('.main-header').outerHeight();
  fixedMenuHeight = $('.fixed-menu').outerHeight() + 30;
  return $(window).on('scroll', function() {
    var topPosition;
    topPosition = $(this).scrollTop();
    if (topPosition >= headerHeight && $(window).width() > 1200) {
      $('.fixed-menu').addClass('active');
      return $('.main-header').css('padding-bottom', fixedMenuHeight);
    } else {
      $('.fixed-menu').removeClass('active');
      return $('.main-header').css('padding-bottom', 30);
    }
  });
};

fixedMenu();
