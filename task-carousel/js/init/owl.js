var slider;

slider = function() {
  if ($(window).width() < 480) {
    $('.news-list').addClass('owl-carousel');
    return $('.owl-carousel').owlCarousel({
      dots: true,
      margin: 15,
      items: 1
    });
  } else {
    $('.owl-carousel').trigger('destroy.owl.carousel');
    return $('.news-list').removeClass('owl-carousel');
  }
};

slider();

$(window).resize(slider);
