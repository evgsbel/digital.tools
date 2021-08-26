
  setTimeout(
    $('.preloader__wrp').fadeOut(), 10000000000
  )


$(() => {
  $(window).on('load', function () {

    // wait for document ready
    let tl1p1 = new TimelineMax()
    let tl1p2 = new TimelineMax()
    let tl2p2 = new TimelineMax()
    let tl3p1 = new TimelineMax()
    // init
    let controller = new ScrollMagic.Controller();

    // define movement of panels
    tl1p1
      .fromTo(".projects", .5, {y: "100%"}, {y: "-100%"})
      .fromTo(".service", .5, {y: "100%"}, {y: "-100%", ease: Linear.easeNone})
      .fromTo(".specialize", .5, {y: "100%"}, {y: "-100%", ease: Linear.easeNone})
      .fromTo(".clients", .5, {y: "100%"}, {y: "-100%", ease: Linear.easeNone})
      .fromTo(".success", .5, {y: "100%"}, {y: "-100%", ease: Linear.easeNone})
      .fromTo(".team", .5, {y: "100%"}, {y: "-100%", ease: Linear.easeNone})
      .fromTo(".blog", .5, {y: "100%"}, {y: "-100%", ease: Linear.easeNone})
      .fromTo(".footer", .5, {y: "100%"}, {y: "-100%", ease: Linear.easeNone})

    tl1p2
      .staggerFromTo('.hero__title', 1.2, {x:-30,opacity:0}, {x:0,opacity:1}, 0.6)
      .staggerFromTo('.hero__subtitle', .5, {x:-30,opacity:0}, {x:0,opacity:1}, 0.2)
      .staggerFromTo('.hero__form', .8, {x:30,opacity:0}, {x:0,opacity:1}, 1)

    tl2p2
      .fromTo('.clients__title', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
      .staggerFromTo('.clients__item', .3, {x:-10,opacity:0}, {x:0,opacity:1}, .2)

    tl3p1
      .fromTo('.specialize__title', .5, {y:30,opacity:0}, {opacity:1,y:0}, .5)
      .staggerFromTo('.specialize__item', .8, {rotationY:-40,x:-10,opacity:0}, {rotationY:0,x:0,opacity:1}, .5)


    const scene1p1 = new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "300%"
    })
      .setPin("#pinContainer")
      .setTween(tl1p1)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);


    const scene1p2 = new ScrollMagic.Scene({
      triggerElement: ".hero",
      triggerHook: 0,
      // reverse: false,
    })
      .setTween(tl1p2)
      .addTo(controller);

    const scene2p1 = new ScrollMagic.Scene({
      triggerElement: ".clients",
      triggerHook: 0.6,
      // reverse: false,
    })
      .setTween(tl2p2)
      .addTo(controller);

    const scene3p1 = new ScrollMagic.Scene({
      triggerElement: ".specialize",
      triggerHook: 0.6,
      // reverse: false,
    })
      .setTween(tl3p1)
      .addTo(controller);

  });

});
