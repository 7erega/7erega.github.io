$(document).ready(function() {
  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    sectionsColor: ['#fff', '#fff', '#f7f7f7', 'fff', '#fff'],
    menu: '#mainMenu',
    paddingTop: '105px',
    fixedElements: '.main-header',
    afterLoad: function(origin) {
      if (origin === 'secondPage') {
        $('.main-header').removeClass('bg-color-2');
        $('.main-header').addClass('bg-color-1');
      } else if (origin === 'thirdPage') {
        $('.main-header').removeClass('bg-color-1');
        $('.main-header').addClass('bg-color-2');
      } else {
        $('.main-header').removeClass('bg-color-1');
        $('.main-header').removeClass('bg-color-2');
      }
    }
  });
});
