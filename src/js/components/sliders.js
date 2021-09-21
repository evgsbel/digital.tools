$(() => {
  let owl = $(".projects__slider");

  let arrow_next = "<svg width='66' height='59' viewBox='0 0 66 59' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M47.3125 58L65.125 40.1875L47.3125 22.375' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/><path d='M65.125 40.1875H36.625C16.9493 40.1875 1 24.2382 1 4.5625V1' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/></svg>"

  owl.owlCarousel({
    loop: true,
    mouseDrag: true,
    autoplay: false,
    smartSpeed: 1600,
    margin: 0,
    navText: ['', arrow_next],
    items: 1,
    dotsClass: 'case__dots',
    dotClass: 'case__dot btn-reset',
    responsive: {
      o: {
        items: 1,
      },
      769: {
        items: 1,
        nav: false,
      },
      900: {
        items: 1,
        nav: true,
        navClass: ["case__arrow case__arrow_prev btn-reset", "case__arrow case__arrow_next btn-reset"],
        navContainerClass: 'case__arrows-wrp',
        animateIn: 'fadeInRight',
        animateOut: 'fadeOutLeft',
      }
    }
  });

  owl.on('changed.owl.carousel', function (e) {
    let next = e.page.index + 1
    $('.case__counter').html('№' + ++next)
    if (next === 6) {
      $('.case__counter').html('№1')
    }
  });

  let windowWidth = $('body').innerWidth()

  if (windowWidth > 769) {

    $('.projects__slider').on('translate.owl.carousel', function (e) {
      let index = e.item.index;
      $('.projects__btn.for-desktop').eq(index).addClass('animated animate__animated fadeInUpBig');
      $('.case__img').eq(index).addClass('animated animate__animated fadeInRightBig');
      $('.case__info').eq(index).addClass('animated animate__animated fadeInLeftBig');

    });

    $('.projects__btn.for-desktop').on('translated.owl.carousel', function (e) {
      let index = e.item.index;
      $('.projects__btn').removeClass('animated animate__animated fadeInUpBig');
      $('.case__img').removeClass('animated animate__animated fadeInRightBig');
      $('.case__info').removeClass('animated animate__animated fadeInLeftBig');
    });

  }

});
