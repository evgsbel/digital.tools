"use strict";console.log("global");for(var canvases=document.getElementsByClassName("demo-canvas"),_loop=function(e){var o=window.innerWidth,t=window.innerHeight,a=canvases[e].getContext("2d");canvases[e].width=o,canvases[e].height=t;var i=[];!function(){var e=!0,r={x:o/2,y:t/2};function n(e){var o,t;o=e.clientX+document.body.scrollLeft,t=e.clientY+document.body.scrollTop,r.x=o,r.y=t}function s(){e=!(document.body.scrollTop>t)}function c(){if(e)for(var n in a.clearRect(0,0,o,t),i)Math.abs(m(r,i[n]))<4e3?(i[n].active=.3,i[n].circle.active=.6):Math.abs(m(r,i[n]))<2e4?(i[n].active=.1,i[n].circle.active=.3):Math.abs(m(r,i[n]))<4e4?(i[n].active=.02,i[n].circle.active=.1):(i[n].active=0,i[n].circle.active=0),y(i[n]),i[n].circle.draw();requestAnimationFrame(c)}function l(e){TweenLite.to(e,1+1*Math.random(),{x:e.originX-50+100*Math.random(),y:e.originY-50+100*Math.random(),ease:Circ.easeInOut,onComplete:function(){l(e)}})}function y(e){if(e.active)for(var o in e.closest)a.beginPath(),a.moveTo(e.x,e.y),a.lineTo(e.closest[o].x,e.closest[o].y),a.strokeStyle="rgba(156,217,249,"+e.active+")",a.stroke()}function g(e,o,t){var i=this;i.pos=e||null,i.radius=o||null,i.color=t||null,this.draw=function(){i.active&&(a.beginPath(),a.arc(i.pos.x,i.pos.y,i.radius,0,2*Math.PI,!1),a.fillStyle="rgba(156,217,249,"+i.active+")",a.fill())}}function m(e,o){return Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2)}!function(){for(var e=0;e<o;e+=o/20)for(var a=0;a<t;a+=t/20){var r=e+Math.random()*o/20,n=a+Math.random()*t/20,s={x:r,originX:r,y:n,originY:n};i.push(s)}for(var c=0;c<i.length;c++){for(var l=[],y=i[c],d=0;d<i.length;d++){var p=i[d];if(y!=p){for(var _=!1,u=0;u<5;u++)_||null==l[u]&&(l[u]=p,_=!0);for(u=0;u<5;u++)_||m(y,p)<m(y,l[u])&&(l[u]=p,_=!0)}}y.closest=l}for(var c in i){var f=new g(i[c],2+2*Math.random(),"rgba(255,255,255,0.3)");i[c].circle=f}}(),function(){for(var e in c(),i)l(i[e])}(),function(){"ontouchstart"in window||window.addEventListener("mousemove",n);window.addEventListener("scroll",s)}()}()},cn=0;cn<canvases.length;cn++)_loop(cn);function _defineProperty(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function creatFullPage(){$("#fullpage").fullpage({scrollingSpeed:1e3,anchors:["oneS","twoS","threeS","fourS","fiveS","sixS","sevenS","eightS","nineS"],menu:"#fullpage-menu",afterLoad:function(e,o){1==o||3==o||5==o||6==o||9==o?$(".header, .pagination, .burger").addClass("white"):$(".header, .pagination, .burger").removeClass("white");var t=window.innerHeight,a=$("body").innerWidth();a<=600&&(1==o||9==o)?$(".header, .burger").addClass("left"):$(".header, .burger").removeClass("left"),a<=600&&4==o?$(".header, .burger").addClass("hide"):$(".header, .burger").removeClass("hide"),t<700&&a<520&&(9==o?$(".header").hide():$(".header").show())}})}$((function(){function e(){$("body").innerWidth()<769?($(".service__items").owlCarousel(_defineProperty({nav:!1,items:1,loop:!0,mouseDrag:!0,autoplay:!1,smartSpeed:1600,dotsClass:"case__dots",dotClass:"case__dot btn-reset",margin:10},"nav",!1)),$(".specialize__list").owlCarousel(_defineProperty({nav:!1,items:1,loop:!0,mouseDrag:!0,autoplay:!1,smartSpeed:1600,dotsClass:"case__dots",dotClass:"case__dot btn-reset",margin:10},"nav",!1)),$(".blog__list").owlCarousel(_defineProperty({nav:!1,items:1,loop:!0,mouseDrag:!0,autoplay:!1,smartSpeed:1600,dotsClass:"case__dots",dotClass:"case__dot btn-reset",margin:10},"nav",!1)),$(".team-slider").owlCarousel(_defineProperty({nav:!1,items:1,loop:!0,mouseDrag:!0,autoplay:!1,smartSpeed:1600,dotsClass:"case__dots",dotClass:"case__dot btn-reset",margin:10},"nav",!1))):($(".service__items").trigger("destroy.owl.carousel").removeClass("owl-carousel owl-theme"),$(".specialize__list").trigger("destroy.owl.carousel").removeClass("owl-carousel owl-theme"),$(".blog__list").trigger("destroy.owl.carousel").removeClass("owl-carousel owl-theme"))}e(),$(window).resize((function(){e()}))})),$((function(){$(window).on("load",(function(){$(".preloader__wrp").fadeOut()}))})),$((function(){var e=$("body").innerWidth(),o=new TimelineMax,t=new TimelineMax,a=new TimelineMax,i=new TimelineMax,r=new TimelineMax,n=new TimelineMax,s=new TimelineMax,c=new TimelineMax,l=new TimelineMax,y=new ScrollMagic.Controller;o.staggerFromTo(".hero__title",1.2,{x:-30,opacity:0},{x:0,opacity:1},.6).staggerFromTo(".hero__subtitle",.5,{x:-30,opacity:0},{x:0,opacity:1},.4).staggerFromTo(".hero .form",.8,{x:30,opacity:0},{x:0,opacity:1},.8).staggerFromTo(".partners__item",.3,{x:-10,opacity:0},{x:0,opacity:1},.2),e<769?t.fromTo(".service__title",.1,{y:30,opacity:0},{opacity:1,y:0},.2).staggerFromTo(".service__subtitle",.5,{y:30,opacity:0},{y:0,opacity:1},.2).fromTo(".service__btn",.1,{y:20,opacity:0},{opacity:1,y:0},.2).staggerFromTo(".service__article",.3,{x:-10,opacity:0},{x:0,opacity:1},.1):t.fromTo(".service__title",.5,{y:30,opacity:0},{opacity:1,y:0},.5).staggerFromTo(".service__subtitle",.5,{y:30,opacity:0},{y:0,opacity:1},.6).fromTo(".service__btn",.5,{y:20,opacity:0},{opacity:1,y:0},.6).staggerFromTo(".service__article",.3,{x:-10,opacity:0},{x:0,opacity:1},.2),a.fromTo(".projects__title",.5,{y:30,opacity:0},{opacity:1,y:0},.5).staggerFromTo(".projects__slider",.3,{y:30,opacity:0},{y:0,opacity:1},3),i.fromTo(".clients__title",.5,{y:30,opacity:0},{opacity:1,y:0},.5).staggerFromTo(".clients__subtitle",.5,{y:30,opacity:0},{y:0,opacity:1},.6).fromTo(".clients__btn",.5,{y:30,opacity:0},{opacity:1,y:0},.7).staggerFromTo(".clients__item",.3,{x:-10,opacity:0},{x:0,opacity:1},.2),e<769?r.fromTo(".specialize__title",.5,{y:30,opacity:0},{opacity:1,y:0},.5).staggerFromTo(".specialize__subtitle",.5,{y:30,opacity:0},{y:0,opacity:1},.6).fromTo(".specialize__btn",.5,{y:30,opacity:0},{opacity:1,y:0},.7).staggerFromTo(".specialize__list",.3,{x:-10,opacity:0},{x:0,opacity:1},.2):r.fromTo(".specialize__title",.5,{y:30,opacity:0},{opacity:1,y:0},.5).staggerFromTo(".specialize__subtitle",.5,{y:30,opacity:0},{y:0,opacity:1},.6).fromTo(".specialize__btn",.5,{y:30,opacity:0},{opacity:1,y:0},.7).staggerFromTo(".specialize__item",.8,{rotationY:-40,x:-10,opacity:0},{rotationY:0,x:0,opacity:1},.5).staggerFromTo(".specialize__img",.5,{scale:.5,opacity:0},{scale:1,opacity:1}),n.fromTo(".success__title",.5,{y:30,opacity:0},{opacity:1,y:0},.5).staggerFromTo(".success__subtitle",.5,{y:30,opacity:0},{y:0,opacity:1},.6).staggerFromTo(".success .form",.8,{x:30,opacity:0},{x:0,opacity:1},.8).staggerFromTo(".success__item",.5,{y:30,opacity:0},{y:0,opacity:1},.6).staggerFromTo(".success__btn",.5,{y:30,opacity:0},{y:0,opacity:1},.6),e<769?s.fromTo(".team__title",.5,{y:30,opacity:0},{opacity:1,y:0},.5).staggerFromTo(".team__subtitle",.5,{y:30,opacity:0},{y:0,opacity:1},.6).fromTo(".team__btn",.5,{y:30,opacity:0},{opacity:1,y:0},.7).staggerFromTo(".team__list",.3,{y:30,opacity:0},{y:0,opacity:1},.3):s.fromTo(".team__title",.5,{y:30,opacity:0},{opacity:1,y:0},.5).staggerFromTo(".team__subtitle",.5,{y:30,opacity:0},{y:0,opacity:1},.6).fromTo(".team__btn",.5,{y:30,opacity:0},{opacity:1,y:0},.7).staggerFromTo(".team__item",.3,{y:30,opacity:0},{y:0,opacity:1},.3),e<769?c.fromTo(".blog__title",.5,{y:30,opacity:0},{opacity:1,y:0},.5).staggerFromTo(".blog__subtitle",.5,{y:30,opacity:0},{y:0,opacity:1},.6).fromTo(".blog__btn",.5,{y:30,opacity:0},{opacity:1,y:0},.6).fromTo(".blog__list",.5,{y:30,opacity:0},{opacity:1,y:0},.6):c.fromTo(".blog__title",.5,{y:30,opacity:0},{opacity:1,y:0},.5).staggerFromTo(".blog__subtitle",.5,{y:30,opacity:0},{y:0,opacity:1},.6).fromTo(".blog__btn",.5,{y:30,opacity:0},{opacity:1,y:0},.6).staggerFromTo(".blog__item",.8,{rotationY:-40,x:-10,opacity:0},{rotationY:0,x:0,opacity:1},.5),l.staggerFromTo(".footer__title",1.2,{x:-30,opacity:0},{x:0,opacity:1},.6).staggerFromTo(".footer__subtitle",.5,{y:-30,opacity:0},{y:0,opacity:1},.4).staggerFromTo(".footer__btn",.8,{y:-30,opacity:0},{y:0,opacity:1},.8).staggerFromTo(".footer__map",.8,{opacity:0},{opacity:1},.8).staggerFromTo(".footer__caption",.2,{y:-10,opacity:0},{y:0,opacity:1},.2).staggerFromTo(".footer__address",.2,{y:10,opacity:0},{y:0,opacity:1},.2).staggerFromTo(".footer-nav__caption",.3,{x:-30,opacity:0},{x:0,opacity:1},.3).staggerFromTo(".footer-nav__item",.1,{y:30,opacity:0},{y:0,opacity:1},.1);new ScrollMagic.Scene({triggerElement:".hero",triggerHook:0,reverse:!0}).setTween(o).addTo(y),new ScrollMagic.Scene({triggerElement:".service",triggerHook:.6,reverse:!0}).setTween(t).addTo(y),new ScrollMagic.Scene({triggerElement:".projects",triggerHook:.6,reverse:!0}).setTween(a).addTo(y),new ScrollMagic.Scene({triggerElement:".clients",triggerHook:.6,reverse:!0}).setTween(i).addTo(y),new ScrollMagic.Scene({triggerElement:".specialize",triggerHook:.6,reverse:!0}).setTween(r).addTo(y),new ScrollMagic.Scene({triggerElement:".success",triggerHook:.6,reverse:!0}).setTween(n).addTo(y),new ScrollMagic.Scene({triggerElement:".team",triggerHook:.6,reverse:!0}).setTween(s).addTo(y),new ScrollMagic.Scene({triggerElement:".blog",triggerHook:.6,reverse:!0}).setTween(c).addTo(y),new ScrollMagic.Scene({triggerElement:".footer",triggerHook:.6,reverse:!0}).setTween(l).addTo(y)})),$(document).ready((function(){creatFullPage(),$(".js-open-hide-menu").bind("click",(function(){$.fn.fullpage.setAutoScrolling(!1)})),$(".js-close-hide-menu").bind("click",(function(){$.fn.fullpage.setAutoScrolling(!0)})),$(".burger").bind("click",(function(){$.fn.fullpage.setAutoScrolling(!1)})),$(".burger--active").bind("click",(function(){$.fn.fullpage.setAutoScrolling(!0)}))})),$(document).ready((function(){var e=$("body").innerHeight(),o=$("body").innerWidth();e<700&&o<520?$.fn.fullpage.setAutoScrolling(!1):$.fn.fullpage.setAutoScrolling(!0)})),$((function(){var e=$(".projects__slider");e.owlCarousel({loop:!0,mouseDrag:!0,autoplay:!1,smartSpeed:1600,margin:0,navText:["","<svg width='66' height='59' viewBox='0 0 66 59' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M47.3125 58L65.125 40.1875L47.3125 22.375' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/><path d='M65.125 40.1875H36.625C16.9493 40.1875 1 24.2382 1 4.5625V1' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-dasharray='6 6'/></svg>"],items:1,dotsClass:"case__dots",dotClass:"case__dot btn-reset",responsive:{o:{items:1},769:{items:1,nav:!1},900:{items:1,nav:!0,navClass:["case__arrow case__arrow_prev btn-reset","case__arrow case__arrow_next btn-reset"],navContainerClass:"case__arrows-wrp",animateIn:"fadeInRight",animateOut:"fadeOutLeft"}}}),e.on("changed.owl.carousel",(function(e){var o=e.page.index+1;$(".case__counter").html("№"+ ++o),6===o&&$(".case__counter").html("№1")})),$("body").innerWidth()>769&&($(".projects__slider").on("translate.owl.carousel",(function(e){var o=e.item.index;$(".projects__btn.for-desktop").eq(o).addClass("animated animate__animated fadeInUpBig"),$(".case__img").eq(o).addClass("animated animate__animated fadeInRightBig"),$(".case__info").eq(o).addClass("animated animate__animated fadeInLeftBig")})),$(".projects__btn.for-desktop").on("translated.owl.carousel",(function(e){e.item.index;$(".projects__btn").removeClass("animated animate__animated fadeInUpBig"),$(".case__img").removeClass("animated animate__animated fadeInRightBig"),$(".case__info").removeClass("animated animate__animated fadeInLeftBig")})))})),$((function(){var e=document.querySelector("body"),o=document.querySelector(".js-open-hide-menu"),t=document.querySelector(".hide-menu"),a=document.querySelector(".js-close-hide-menu"),i=document.querySelector(".hide-menu__logo"),r=document.querySelector(".hide-menu__mobile-logo"),n=document.querySelector(".hide-menu__nav");o.addEventListener("click",(function(o){o.preventDefault(),t.classList.add("is-open"),i.classList.add("opened-menu"),r.classList.add("opened-menu"),n.classList.add("opened-menu"),e.classList.add("opened-menu")})),a.addEventListener("click",(function(o){o.preventDefault(),t.classList.remove("is-open"),i.classList.remove("opened-menu"),r.classList.remove("opened-menu"),n.classList.remove("opened-menu"),e.classList.remove("opened-menu")}))})),$((function(){var e=document.querySelector(".burger"),o=document.querySelector(".header__nav"),t=document.querySelector(".mobile-logo"),a=document.querySelector(".header"),i=document.querySelector("body");e.addEventListener("click",(function(e){e.currentTarget.classList.toggle("burger--active"),o.classList.toggle("is-open"),t.classList.toggle("menu-in"),a.classList.toggle("menu-in"),i.classList.toggle("menu-in")}))})),$((function(){$("[data-fancybox]").fancybox({animationEffect:"zoom-in-out",animationDuration:600,transitionEffect:"rotate",transitionDuration:400})}));