var element2Height, element2Position, elementHeight, elementPosition, fixedMenuOuterHeight;

fixedMenuOuterHeight = $('.fixed-menu').outerHeight();

elementPosition = $('#fixedList').offset().top - fixedMenuOuterHeight;

elementHeight = $('#fixedList').outerHeight() + 30;

element2Position = $('.list2').offset().top - fixedMenuOuterHeight;

element2Height = $('.list2').outerHeight();

$(window).on('scroll', function() {
  var topPosition;
  topPosition = $(this).scrollTop();
  if (topPosition >= elementPosition && topPosition + elementHeight + fixedMenuOuterHeight <= element2Position + 110) {
    $('#fixedList').addClass('fixed').css('top', fixedMenuOuterHeight);
    return $('#fixedList').parent().css('padding-bottom', elementHeight + 120);
  } else if (topPosition + elementHeight + fixedMenuOuterHeight >= element2Position + 110) {
    return $('#fixedList').css({
      'top': element2Position - elementHeight + 110 - topPosition
    });
  } else {
    $('#fixedList').removeClass('fixed');
    return $('#fixedList').parent().css('padding-bottom', 150);
  }
});
