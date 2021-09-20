"use strict";

console.log('global');
"use strict";

var canvases = document.getElementsByClassName('demo-canvas');

var _loop = function _loop(cn) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var ctx = canvases[cn].getContext('2d');
  canvases[cn].width = width;
  canvases[cn].height = height;
  var points = [];

  (function init() {
    var largeHeader,
        animateHeader = true;
    var target = {
      x: width / 2,
      y: height / 2
    }; // Main

    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
      // canvas = document.querySelector('.demo-canvas');
      // canvases[cn].width = width;
      // canvases[cn].height = height;
      // create points
      for (var x = 0; x < width; x = x + width / 20) {
        for (var y = 0; y < height; y = y + height / 20) {
          var px = x + Math.random() * width / 20;
          var py = y + Math.random() * height / 20;
          var p = {
            x: px,
            originX: px,
            y: py,
            originY: py
          };
          points.push(p);
        }
      } // for each point find the 5 closest points


      for (var i = 0; i < points.length; i++) {
        var closest = [];
        var p1 = points[i];

        for (var j = 0; j < points.length; j++) {
          var p2 = points[j];

          if (!(p1 == p2)) {
            var placed = false;

            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] == undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }

        p1.closest = closest;
      } // assign a circle to each point


      for (var i in points) {
        var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
        points[i].circle = c;
      }
    } // Event handling


    function addListeners() {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }

      window.addEventListener('scroll', scrollCheck); // window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
      var posx = 0;
      var posy = 0;
      posx = e.clientX + document.body.scrollLeft;
      posy = e.clientY + document.body.scrollTop;
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      if (document.body.scrollTop > height) animateHeader = false;else animateHeader = true;
    } // function resize() {
    //   width = window.innerWidth;
    //   height = window.innerHeight;
    //   largeHeader.style.height = height + 'px';
    //   canvases[cn].width = width;
    //   canvases[cn].height = height;
    // }
    // animation


    function initAnimation() {
      animate();

      for (var i in points) {
        shiftPoint(points[i]);
      }
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);

        for (var i in points) {
          // detect points in range
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }

      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function onComplete() {
          shiftPoint(p);
        }
      });
    } // Canvas manipulation


    function drawLines(p) {
      if (!p.active) return;

      for (var i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
        ctx.stroke();
      }
    }

    function Circle(pos, rad, color) {
      var _this = this; // constructor


      (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      })();

      this.draw = function () {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')';
        ctx.fill();
      };
    } // Util


    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
  })();
};

for (var cn = 0; cn < canvases.length; cn++) {
  _loop(cn);
}
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//mobile sliders
$(function () {
  function checkWidth() {
    var windowWidth = $('body').innerWidth();

    if (windowWidth < 769) {
      //init sliders on mobile
      var serviceSlider = $('.service__items');
      serviceSlider.owlCarousel(_defineProperty({
        nav: false,
        items: 1,
        loop: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1600,
        dotsClass: 'case__dots',
        dotClass: 'case__dot btn-reset',
        margin: 10
      }, "nav", false));
      var specializeSlider = $('.specialize__list');
      specializeSlider.owlCarousel(_defineProperty({
        nav: false,
        items: 1,
        loop: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1600,
        dotsClass: 'case__dots',
        dotClass: 'case__dot btn-reset',
        margin: 10
      }, "nav", false));
      var blogSlider = $('.blog__list');
      blogSlider.owlCarousel(_defineProperty({
        nav: false,
        items: 1,
        loop: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1600,
        dotsClass: 'case__dots',
        dotClass: 'case__dot btn-reset',
        margin: 10
      }, "nav", false));
      var teamSlider = $('.team-slider');
      teamSlider.owlCarousel(_defineProperty({
        nav: false,
        items: 1,
        loop: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1600,
        dotsClass: 'case__dots',
        dotClass: 'case__dot btn-reset',
        margin: 10
      }, "nav", false));
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
});
"use strict";

$(function () {
  $(window).on('load', function () {
    $('.preloader__wrp').fadeOut();
  });
});
$(function () {
  var windowWidth = $('body').innerWidth();
  var secHero = new TimelineMax();
  var secService = new TimelineMax();
  var secProject = new TimelineMax();
  var secClients = new TimelineMax();
  var secSpecialize = new TimelineMax();
  var secSuccess = new TimelineMax();
  var secTeam = new TimelineMax();
  var secBlog = new TimelineMax();
  var secFooter = new TimelineMax(); // init

  var controller = new ScrollMagic.Controller();
  secHero.staggerFromTo('.hero__title', 1.2, {
    x: -30,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.6).staggerFromTo('.hero__subtitle', .5, {
    x: -30,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.4).staggerFromTo('.hero .form', .8, {
    x: 30,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.8).staggerFromTo('.partners__item', .3, {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, .2);

  if (windowWidth < 769) {
    secService.fromTo('.service__title', .1, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .2).staggerFromTo('.service__subtitle', .5, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .2).fromTo('.service__btn', .1, {
      y: 20,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .2).staggerFromTo('.service__article', .3, {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, .1);
  } else {
    secService.fromTo('.service__title', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.service__subtitle', .5, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .6).fromTo('.service__btn', .5, {
      y: 20,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .6).staggerFromTo('.service__article', .3, {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, .2);
  }

  secProject.fromTo('.projects__title', .5, {
    y: 30,
    opacity: 0
  }, {
    opacity: 1,
    y: 0
  }, .5).staggerFromTo('.projects__slider', .3, {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 3);
  secClients.fromTo('.clients__title', .5, {
    y: 30,
    opacity: 0
  }, {
    opacity: 1,
    y: 0
  }, .5).staggerFromTo('.clients__subtitle', .5, {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, .6).fromTo('.clients__btn', .5, {
    y: 30,
    opacity: 0
  }, {
    opacity: 1,
    y: 0
  }, .7).staggerFromTo('.clients__item', .3, {
    x: -10,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, .2);

  if (windowWidth < 769) {
    secSpecialize.fromTo('.specialize__title', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.specialize__subtitle', .5, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .6).fromTo('.specialize__btn', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .7).staggerFromTo('.specialize__list', .3, {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, .2);
  } else {
    secSpecialize.fromTo('.specialize__title', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.specialize__subtitle', .5, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .6).fromTo('.specialize__btn', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .7).staggerFromTo('.specialize__item', .8, {
      rotationY: -40,
      x: -10,
      opacity: 0
    }, {
      rotationY: 0,
      x: 0,
      opacity: 1
    }, .5).staggerFromTo('.specialize__img', .5, {
      scale: .5,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1
    });
  }

  secSuccess.fromTo('.success__title', .5, {
    y: 30,
    opacity: 0
  }, {
    opacity: 1,
    y: 0
  }, .5).staggerFromTo('.success__subtitle', .5, {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, .6).staggerFromTo('.success .form', .8, {
    x: 30,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.8).staggerFromTo('.success__item', .5, {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, .6).staggerFromTo('.success__btn', .5, {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, .6);

  if (windowWidth < 769) {
    secTeam.fromTo('.team__title', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.team__subtitle', .5, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .6).fromTo('.team__btn', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .7).staggerFromTo('.team__list', .3, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .3);
  } else {
    secTeam.fromTo('.team__title', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.team__subtitle', .5, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .6).fromTo('.team__btn', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .7).staggerFromTo('.team__item', .3, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .3);
  }

  if (windowWidth < 769) {
    secBlog.fromTo('.blog__title', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.blog__subtitle', .5, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .6).fromTo('.blog__btn', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .6).fromTo('.blog__list', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .6);
  } else {
    secBlog.fromTo('.blog__title', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.blog__subtitle', .5, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .6).fromTo('.blog__btn', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .6).staggerFromTo('.blog__item', .8, {
      rotationY: -40,
      x: -10,
      opacity: 0
    }, {
      rotationY: 0,
      x: 0,
      opacity: 1
    }, .5);
  }

  secFooter.staggerFromTo('.footer__title', 1.2, {
    x: -30,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.6).staggerFromTo('.footer__subtitle', .5, {
    y: -30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.4).staggerFromTo('.footer__btn', .8, {
    y: -30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.8).staggerFromTo('.footer__map', .8, {
    opacity: 0
  }, {
    opacity: 1
  }, 0.8).staggerFromTo('.footer__caption', .2, {
    y: -10,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.2).staggerFromTo('.footer__address', .2, {
    y: 10,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.2).staggerFromTo('.footer-nav__caption', .3, {
    x: -30,
    opacity: 0
  }, {
    x: 0,
    opacity: 1
  }, 0.3).staggerFromTo('.footer-nav__item', .1, {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, .1);
  var sceneHero = new ScrollMagic.Scene({
    triggerElement: ".hero",
    triggerHook: 0,
    reverse: true
  }).setTween(secHero).addTo(controller);
  var sceneService = new ScrollMagic.Scene({
    triggerElement: ".service",
    triggerHook: 0.6,
    reverse: true
  }).setTween(secService).addTo(controller);
  var sceneProject = new ScrollMagic.Scene({
    triggerElement: ".projects",
    triggerHook: 0.6,
    reverse: true
  }).setTween(secProject).addTo(controller);
  var sceneClients = new ScrollMagic.Scene({
    triggerElement: ".clients",
    triggerHook: 0.6,
    reverse: true
  }).setTween(secClients).addTo(controller);
  var sceneSpecialize = new ScrollMagic.Scene({
    triggerElement: ".specialize",
    triggerHook: 0.6,
    reverse: true
  }).setTween(secSpecialize).addTo(controller);
  var sceneSuccess = new ScrollMagic.Scene({
    triggerElement: ".success",
    triggerHook: 0.6,
    reverse: true
  }).setTween(secSuccess).addTo(controller);
  var sceneTeam = new ScrollMagic.Scene({
    triggerElement: ".team",
    triggerHook: 0.6,
    reverse: true
  }).setTween(secTeam).addTo(controller);
  var sceneBlog = new ScrollMagic.Scene({
    triggerElement: ".blog",
    triggerHook: 0.6,
    reverse: true
  }).setTween(secBlog).addTo(controller);
  var sceneFooter = new ScrollMagic.Scene({
    triggerElement: ".footer",
    triggerHook: 0.6,
    reverse: true
  }).setTween(secFooter).addTo(controller);
}); // fullpage

function creatFullPage() {
  $('#fullpage').fullpage({
    scrollingSpeed: 1000,
    anchors: ['oneS', 'twoS', 'threeS', 'fourS', 'fiveS', 'sixS', 'sevenS', 'eightS', 'nineS'],
    menu: '#fullpage-menu',
    afterLoad: function afterLoad(anchorLink, index) {
      //for the 2nd vertical section
      if (index == 1 || index == 3 || index == 5 || index == 6 || index == 9) {
        $('.header, .pagination, .burger').addClass('white');
      } else {
        $('.header, .pagination, .burger').removeClass('white');
      }

      var windowHeight = $('body').innerHeight();
      var windowWidth = $('body').innerWidth();

      if (windowWidth <= 600) {
        if (index == 1 || index == 9) {
          $('.header, .burger').addClass('left');
        } else {
          $('.header, .burger').removeClass('left');
        }
      }

      if (windowWidth <= 600) {
        if (index == 4) {
          $('.header, .burger').addClass('hide');
        } else {
          $('.header, .burger').removeClass('hide');
        }
      }

      if (windowHeight < 700 && windowWidth < 520) {
        if (index == 9) {
          $('.header').addClass('is-hidden');
        } else {
          $('.header').removeClass('is-hidden');
        }
      }
    }
  });
}

$(document).ready(function () {
  creatFullPage();
  var addCl = true;
  $('.js-open-hide-menu').bind('click', function () {
    $.fn.fullpage.setAutoScrolling(false);
  });
  $('.js-close-hide-menu').bind('click', function () {
    $.fn.fullpage.setAutoScrolling(true);
  });
});
$(document).ready(function () {
  var windowHeight = $('body').innerHeight();
  var windowWidth = $('body').innerWidth();

  if (windowHeight < 700 && windowWidth < 520) {
    $.fn.fullpage.setAutoScrolling(false);
  } else {
    $.fn.fullpage.setAutoScrolling(true);
  }
});
"use strict";

$(function () {
  var owl = $(".projects__slider");
  var arrow_next = "<svg width='66' height='59' viewBox='0 0 66 59' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M47.3125 58L65.125 40.1875L47.3125 22.375' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/><path d='M65.125 40.1875H36.625C16.9493 40.1875 1 24.2382 1 4.5625V1' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/></svg>";
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
        items: 1
      },
      769: {
        items: 1,
        nav: false
      },
      900: {
        items: 1,
        nav: true,
        navClass: ["case__arrow case__arrow_prev btn-reset", "case__arrow case__arrow_next btn-reset"],
        navContainerClass: 'case__arrows-wrp',
        animateIn: 'fadeInRight',
        animateOut: 'fadeOutLeft'
      }
    }
  });
  owl.on('changed.owl.carousel', function (e) {
    var next = e.page.index + 1;
    $('.case__counter').html('№' + ++next);

    if (next === 6) {
      $('.case__counter').html('№1');
    }
  });
  var windowWidth = $('body').innerWidth();

  if (windowWidth > 769) {
    $('.projects__slider').on('translate.owl.carousel', function (e) {
      var index = e.item.index;
      $('.projects__btn').eq(index).addClass('animated animate__animated fadeInUpBig');
      $('.case__img').eq(index).addClass('animated animate__animated fadeInRightBig');
      $('.case__info').eq(index).addClass('animated animate__animated fadeInLeftBig');
    });
    $('.projects__slider').on('translated.owl.carousel', function (e) {
      var index = e.item.index;
      $('.projects__btn').removeClass('animated animate__animated fadeInUpBig');
      $('.case__img').removeClass('animated animate__animated fadeInRightBig');
      $('.case__info').removeClass('animated animate__animated fadeInLeftBig');
    });
  }
});
"use strict";

/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */
//openHideMenu
$(function () {
  var body = document.querySelector('body');
  var openElem = document.querySelector('.js-open-hide-menu');
  var hideMenu = document.querySelector('.hide-menu');
  var closeBtn = document.querySelector('.js-close-hide-menu');
  var logo = document.querySelector('.hide-menu__logo');
  var nav = document.querySelector('.hide-menu__nav');
  openElem.addEventListener('click', function (event) {
    event.preventDefault();
    hideMenu.classList.add('is-open');
    logo.classList.add('opened-menu');
    nav.classList.add('opened-menu');
    body.classList.add('opened-menu');
  });
  closeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    hideMenu.classList.remove('is-open');
    logo.classList.remove('opened-menu');
    nav.classList.remove('opened-menu');
    body.classList.remove('opened-menu');
  });
}); //burger
//openMobileNav

$(function () {
  var burger = document.querySelector('.burger');
  var mobileNav = document.querySelector('.header__nav');
  var mobileLogo = document.querySelector('.mobile-logo');
  var header = document.querySelector('.header');
  burger.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('burger--active');
    mobileNav.classList.toggle('is-open');
    mobileLogo.classList.toggle('menu-in');
    header.classList.toggle('menu-in');
  });
});
$(function () {
  //sticky header
  $(window).scroll(function windowScroll() {
    if ($(this).scrollTop() > 4) {
      $('body').addClass('sticky');
    } else {
      $('body').removeClass('sticky');
    }
  });
});
//# sourceMappingURL=main.js.map
