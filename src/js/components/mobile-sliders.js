//mobile sliders

$(() => {
  function checkWidth() {
    let windowWidth = $('body').innerWidth()

    if (windowWidth < 769) {
      //init sliders on mobile
      const serviceSlider = $('.service__items')
      serviceSlider.owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1600,
        dotsClass: 'case__dots',
        dotClass: 'case__dot btn-reset',
        margin: 10,
        nav: false,
      });

      const specializeSlider = $('.specialize__list')
      specializeSlider.owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1600,
        dotsClass: 'case__dots',
        dotClass: 'case__dot btn-reset',
        margin: 10,
        nav: false,
      });

      const blogSlider = $('.blog__list')
      blogSlider.owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1600,
        dotsClass: 'case__dots',
        dotClass: 'case__dot btn-reset',
        margin: 10,
        nav: false,
      });

      const teamSlider = $('.team-slider')
      teamSlider.owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1600,
        dotsClass: 'case__dots',
        dotClass: 'case__dot btn-reset',
        margin: 10,
        nav: false,
      });

    } else {
      //remove slider on desktop
      $('.service__items').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme');
      $('.specialize__list').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme');
      $('.blog__list').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme');

    }

  }

  checkWidth();
  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
})
