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

      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
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
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height + 'px';
      canvases[cn].width = width;
      canvases[cn].height = height;
    } // animation


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

$(function () {
  $(window).on('load', function () {
    $('.preloader__wrp').fadeOut();
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
    }, 0.4).staggerFromTo('.hero__form', .8, {
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
    secProject.fromTo('.projects__title', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.case__link', .5, {
      y: -5,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, 3).staggerFromTo('.case__img', .8, {
      x: 30,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 1).staggerFromTo('.case li', .7, {
      x: 30,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, .3).staggerFromTo('.case p', .7, {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, .3);
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
    }, .5);
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
    }, .6).staggerFromTo('.hero__form', .8, {
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
    }, .7).staggerFromTo('.team__img', .6, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .4).staggerFromTo('.team__name', .5, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .3).staggerFromTo('.team__info', .4, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .2);
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
      triggerHook: 0 // reverse: false,

    }).setTween(secHero).addTo(controller);
    var sceneService = new ScrollMagic.Scene({
      triggerElement: ".service",
      triggerHook: 0.6 // reverse: false,

    }).setTween(secService).addTo(controller);
    var sceneProject = new ScrollMagic.Scene({
      triggerElement: ".projects",
      triggerHook: 0.6 // reverse: false,

    }).setTween(secProject).addTo(controller);
    var sceneClients = new ScrollMagic.Scene({
      triggerElement: ".clients",
      triggerHook: 0.6 // reverse: false,

    }).setTween(secClients).addTo(controller);
    var sceneSpecialize = new ScrollMagic.Scene({
      triggerElement: ".specialize",
      triggerHook: 0.6 // reverse: false,

    }).setTween(secSpecialize).addTo(controller);
    var sceneSuccess = new ScrollMagic.Scene({
      triggerElement: ".success",
      triggerHook: 0.6 // reverse: false,

    }).setTween(secSuccess).addTo(controller);
    var sceneTeam = new ScrollMagic.Scene({
      triggerElement: ".team",
      triggerHook: 0.6 // reverse: false,

    }).setTween(secTeam).addTo(controller);
    var sceneBlog = new ScrollMagic.Scene({
      triggerElement: ".team",
      triggerHook: 0.6 // reverse: false,

    }).setTween(secBlog).addTo(controller);
    var sceneFooter = new ScrollMagic.Scene({
      triggerElement: ".team",
      triggerHook: 0.6 // reverse: false,

    }).setTween(secFooter).addTo(controller);
  });
}); // // Init ScrollMagic
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
//sections

$(function () {
  var slidesSection = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });
  var slides = document.querySelectorAll(".section");

  for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i]
    }).setPin(slides[i], {
      pushFollowers: false
    }).addIndicators({
      colorStart: "red",
      colorEnd: "rgba(255,255,255,0.5)",
      colorTrigger: "blue"
    }).addTo(slidesSection);
  }
}); // header

var headerController = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: '95%',
    triggerHook: 'onLeave'
  }
});
new ScrollMagic.Scene({
  triggerElement: "#one"
}).setClassToggle(".header", "header_white") // add class toggle
.addTo(headerController);
new ScrollMagic.Scene({
  triggerElement: "#three"
}).setClassToggle(".header", "header_white") // add class toggle
.addTo(headerController);
new ScrollMagic.Scene({
  triggerElement: "#five"
}).setClassToggle(".header", "header_white") // add class toggle
.addTo(headerController);
new ScrollMagic.Scene({
  triggerElement: "#six"
}).setClassToggle(".header", "header_white") // add class toggle
.addTo(headerController);
new ScrollMagic.Scene({
  triggerElement: "#nine"
}).setClassToggle(".header", "header_white") // add class toggle
.addTo(headerController);
/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */
"use strict";
//# sourceMappingURL=main.js.map
