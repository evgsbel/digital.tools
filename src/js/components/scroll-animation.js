$(() => {
  $(window).on('load', function () {
    $('.preloader__wrp').fadeOut()

    let secHero = new TimelineMax()
    let secService = new TimelineMax()
    let secProject = new TimelineMax()
    let secClients = new TimelineMax()
    let secSpecialize = new TimelineMax()
    let secSuccess = new TimelineMax()
    let secTeam = new TimelineMax()
    let secBlog = new TimelineMax()
    let secFooter = new TimelineMax()
    // init
    let controller = new ScrollMagic.Controller();

    secHero
      .staggerFromTo('.hero__title', 1.2, {x: -30, opacity: 0}, {x: 0, opacity: 1}, 0.6)
      .staggerFromTo('.hero__subtitle', .5, {x: -30, opacity: 0}, {x: 0, opacity: 1}, 0.4)
      // .staggerFromTo('.hero__form', .8, {x: 30, opacity: 0}, {x: 0, opacity: 1}, 0.8)
      .staggerFromTo('.partners__item', .3, {x:-10,opacity:0}, {x:0,opacity:1}, .2)

    secService
      .fromTo('.service__title', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
      .staggerFromTo('.service__subtitle', .5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .6)
      .fromTo('.service__btn', .5, {y: 20, opacity: 0}, {opacity: 1, y: 0}, .6)
      .staggerFromTo('.service__article', .3, {x:-10,opacity:0}, {x:0,opacity:1}, .2)

    secProject
      .fromTo('.projects__title', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
      // .staggerFromTo('.case__link', .5, {y:-5,opacity:0}, {y:0,opacity:1}, 3)
      // .staggerFromTo('.case__img', .8, {x:30,opacity:0}, {x:0,opacity:1}, 1)
      // .staggerFromTo('.case li', .7, {x:30,opacity:0}, {x:0,opacity:1}, .3)
      // .staggerFromTo('.case p', .7, {x:-10,opacity:0}, {x:0,opacity:1}, .3)

    secClients
      .fromTo('.clients__title', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
      .staggerFromTo('.clients__subtitle', .5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .6)
      .fromTo('.clients__btn', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .7)
      .staggerFromTo('.clients__item', .3, {x: -10, opacity: 0}, {x: 0, opacity: 1}, .2)

    secSpecialize
      .fromTo('.specialize__title', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
      .staggerFromTo('.specialize__subtitle', .5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .6)
      .fromTo('.specialize__btn', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .7)
      .staggerFromTo('.specialize__item', .8, {rotationY: -40, x: -10, opacity: 0}, {
        rotationY: 0,
        x: 0,
        opacity: 1
      }, .5)
      .staggerFromTo('.specialize__img', .5, {scale:.5, opacity: 0}, {scale:1, opacity: 1})

    secSuccess
      .fromTo('.success__title', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
      .staggerFromTo('.success__subtitle', .5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .6)
      // .staggerFromTo('.hero__form', .8, {x: 30, opacity: 0}, {x: 0, opacity: 1}, 0.8)
      .staggerFromTo('.success__item', .5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .6)
      .staggerFromTo('.success__btn', .5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .6)

    secTeam
      .fromTo('.team__title', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
      .staggerFromTo('.team__subtitle', .5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .6)
      .fromTo('.team__btn', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .7)
      .staggerFromTo('.team__img', .2, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .2)
      .staggerFromTo('.team__name', .2, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .1)
      .staggerFromTo('.team__info', .2, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .1)

    secBlog
      .fromTo('.blog__title', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
      .staggerFromTo('.blog__subtitle', .5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .6)
      .fromTo('.blog__btn', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .6)
      .staggerFromTo('.blog__item', .8, {rotationY: -40, x: -10, opacity: 0}, {
        rotationY: 0,
        x: 0,
        opacity: 1
      }, .5)

    secFooter
      .staggerFromTo('.footer__title', 1.2, {x: -30, opacity: 0}, {x: 0, opacity: 1}, 0.6)
      .staggerFromTo('.footer__subtitle', .5, {y: -30, opacity: 0}, {y: 0, opacity: 1}, 0.4)
      .staggerFromTo('.footer__btn', .8, {y: -30, opacity: 0}, {y: 0, opacity: 1}, 0.8)
      .staggerFromTo('.footer__map', .8, {opacity: 0}, {opacity: 1}, 0.8)
      .staggerFromTo('.footer__caption', .2, {y:-10, opacity: 0}, {y:0, opacity: 1}, 0.2)
      .staggerFromTo('.footer__address', .2, {y:10, opacity: 0}, {y:0, opacity: 1}, 0.2)
      .staggerFromTo('.footer-nav__caption', .3, {x: -30, opacity: 0}, {x: 0, opacity: 1}, 0.3)
      .staggerFromTo('.footer-nav__item', .1, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .1)

    const sceneHero = new ScrollMagic.Scene({
      triggerElement: ".hero",
      triggerHook: 0,
      reverse: true,
    })
      .setTween(secHero)
      .addTo(controller);

    const sceneService = new ScrollMagic.Scene({
      triggerElement: ".service",
      triggerHook: 0.6,
      reverse: true,
    })
      .setTween(secService)
      .addTo(controller);

    const sceneProject = new ScrollMagic.Scene({
      triggerElement: ".projects",
      triggerHook: 0.6,
      reverse: true,
    })
      .setTween(secProject)
      .addTo(controller);

    const sceneClients = new ScrollMagic.Scene({
      triggerElement: ".clients",
      triggerHook: 0.6,
      reverse: true,
    })
      .setTween(secClients)
      .addTo(controller);

    const sceneSpecialize = new ScrollMagic.Scene({
      triggerElement: ".specialize",
      triggerHook: 0.6,
      reverse: true,
    })
      .setTween(secSpecialize)
      .addTo(controller);

    const sceneSuccess = new ScrollMagic.Scene({
      triggerElement: ".success",
      triggerHook: 0.6,
      reverse: true,
    })
      .setTween(secSuccess)
      .addTo(controller);

    const sceneTeam = new ScrollMagic.Scene({
      triggerElement: ".team",
      triggerHook: 0.6,
      reverse: true,
    })
      .setTween(secTeam)
      .addTo(controller);

    const sceneBlog = new ScrollMagic.Scene({
      triggerElement: ".blog",
      triggerHook: 0.6,
      reverse: true,
    })
      .setTween(secBlog)
      .addTo(controller);

    const sceneFooter = new ScrollMagic.Scene({
      triggerElement: ".footer",
      triggerHook: 0.6,
      reverse: true,
    })
      .setTween(secFooter)
      .addTo(controller);

  });

});


// // Init ScrollMagic
// const ctrl = new ScrollMagic.Controller({
//   globalSceneOptions: {
//     triggerHook: 'onLeave'
//   }
// });
//
// // Create scene
// $("section").each(function() {
//
//   let name = $(this).attr('id');
//
//   new ScrollMagic.Scene({
//     triggerElement: this,
//     duration: "101%"
//   })
//     .setPin(this)
//     .addIndicators({
//       colorStart: "rgba(255,255,255,0.5)",
//       colorEnd: "rgba(255,255,255,0.5)",
//       colorTrigger : "rgba(255,255,255,1)",
//       name:name
//     })
//     .loglevel(3)
//     .addTo(ctrl);
//
// });
//

// header
const headerController = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: '100%',
    triggerHook: 'onLeave',
  }
});

new ScrollMagic.Scene({triggerElement: "#one"})
  .setClassToggle(".header, .pagination", "white") // add class toggle
  // .setClassToggle(".pagination", "pagination_white") // add class toggle
  .addTo(headerController);
new ScrollMagic.Scene({triggerElement: "#three"})
  .setClassToggle(".header, .pagination", "white") // add class toggle
  // .setClassToggle(".pagination", "pagination_white") // add class toggle
  .addTo(headerController);
new ScrollMagic.Scene({triggerElement: "#five"})
  .setClassToggle(".header, .pagination", "white") // add class toggle
  // .setClassToggle(".pagination", "pagination_white") // add class toggle
  .addTo(headerController);
new ScrollMagic.Scene({triggerElement: "#six"})
  .setClassToggle(".header, .pagination", "white") // add class toggle
  // .setClassToggle(".pagination", "pagination_white") // add class toggle
  .addTo(headerController);
new ScrollMagic.Scene({triggerElement: "#nine"})
  .setClassToggle(".header, .pagination", "white") // add class toggle
  // .setClassToggle(".pagination", "pagination_white") // add class toggle
  .addTo(headerController);


// fullpage

$('#fullpage').fullpage({
  scrollingSpeed: 1000,
  anchors: ['oneS', 'twoS', 'threeS', 'fourS', 'fiveS', 'sixS', 'sevenS', 'eightS', 'nineS'],
  menu: '#fullpage-menu',
});



