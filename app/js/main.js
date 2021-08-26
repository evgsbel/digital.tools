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

setTimeout($('.preloader__wrp').fadeOut(), 10000000000);
$(function () {
  $(window).on('load', function () {
    // wait for document ready
    var tl1p1 = new TimelineMax();
    var tl1p2 = new TimelineMax();
    var tl2p2 = new TimelineMax();
    var tl3p1 = new TimelineMax(); // init

    var controller = new ScrollMagic.Controller(); // define movement of panels

    tl1p1.fromTo(".projects", .5, {
      y: "100%"
    }, {
      y: "-100%"
    }).fromTo(".service", .5, {
      y: "100%"
    }, {
      y: "-100%",
      ease: Linear.easeNone
    }).fromTo(".specialize", .5, {
      y: "100%"
    }, {
      y: "-100%",
      ease: Linear.easeNone
    }).fromTo(".clients", .5, {
      y: "100%"
    }, {
      y: "-100%",
      ease: Linear.easeNone
    }).fromTo(".success", .5, {
      y: "100%"
    }, {
      y: "-100%",
      ease: Linear.easeNone
    }).fromTo(".team", .5, {
      y: "100%"
    }, {
      y: "-100%",
      ease: Linear.easeNone
    }).fromTo(".blog", .5, {
      y: "100%"
    }, {
      y: "-100%",
      ease: Linear.easeNone
    }).fromTo(".footer", .5, {
      y: "100%"
    }, {
      y: "-100%",
      ease: Linear.easeNone
    });
    tl1p2.staggerFromTo('.hero__title', 1.2, {
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
    }, 0.2).staggerFromTo('.hero__form', .8, {
      x: 30,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, 1);
    tl2p2.fromTo('.clients__title', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.clients__item', .3, {
      x: -10,
      opacity: 0
    }, {
      x: 0,
      opacity: 1
    }, .2);
    tl3p1.fromTo('.specialize__title', .5, {
      y: 30,
      opacity: 0
    }, {
      opacity: 1,
      y: 0
    }, .5).staggerFromTo('.specialize__item', .8, {
      rotationY: -40,
      x: -10,
      opacity: 0
    }, {
      rotationY: 0,
      x: 0,
      opacity: 1
    }, .5);
    var scene1p1 = new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "300%"
    }).setPin("#pinContainer").setTween(tl1p1).addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    var scene1p2 = new ScrollMagic.Scene({
      triggerElement: ".hero",
      triggerHook: 0 // reverse: false,

    }).setTween(tl1p2).addTo(controller);
    var scene2p1 = new ScrollMagic.Scene({
      triggerElement: ".clients",
      triggerHook: 0.6 // reverse: false,

    }).setTween(tl2p2).addTo(controller);
    var scene3p1 = new ScrollMagic.Scene({
      triggerElement: ".specialize",
      triggerHook: 0.6 // reverse: false,

    }).setTween(tl3p1).addTo(controller);
  });
});
/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */
"use strict";
//# sourceMappingURL=main.js.map
