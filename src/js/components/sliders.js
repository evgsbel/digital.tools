$(() => {
  let owl = $(".projects__slider");

  let arrow_next = "<svg width='66' height='59' viewBox='0 0 66 59' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M47.3125 58L65.125 40.1875L47.3125 22.375' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/><path d='M65.125 40.1875H36.625C16.9493 40.1875 1 24.2382 1 4.5625V1' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/></svg>"

  owl.owlCarousel({
    nav: false,
    items: 1,
    loop: true,
    mouseDrag: true,
    autoplay: false,
    smartSpeed: 1600,
    margin: 0,
    nav: true,
    navText: ['',arrow_next],
    navClass: ["case__arrow case__arrow_prev btn-reset", "case__arrow case__arrow_next btn-reset"],
    navContainerClass: 'case__arrows-wrp',
    dotsClass: 'case__dots',
    dotClass: 'case__dot btn-reset',
    responsive: {
      0: {
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut', // and this
      },
    },
  });

  owl.on('changed.owl.carousel', function (e) {
    let next = e.page.index + 1
    $('.case__counter').html('№' + ++next)
    if (next === 6) {
      $('.case__counter').html('№1')
    }
  });

  $('.projects__slider').on('translate.owl.carousel', function (e) {
    var index = e.item.index;
    $('.case__info').removeClass('animated animate__animated fadeInDown');
    $('.case__info').eq(index).addClass('animated animate__animated fadeInDown');
    $('.case__img').removeClass('animated animate__animated fadeInUp');
    $('.case__img').eq(index).addClass('animated animate__animated fadeInUp');
  });

});
