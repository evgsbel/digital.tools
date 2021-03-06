/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */


//openHideMenu
$(() => {
  let body = document.querySelector('body')
  let openElem = document.querySelector('.js-open-hide-menu')
  let hideMenu = document.querySelector('.hide-menu')
  let closeBtn = document.querySelector('.js-close-hide-menu')
  let logo = document.querySelector('.hide-menu__logo')
  let mobileLogo = document.querySelector('.hide-menu__mobile-logo')
  let nav = document.querySelector('.hide-menu__nav')
  openElem.addEventListener('click', (event) => {
    event.preventDefault()
    hideMenu.classList.add('is-open')
    logo.classList.add('opened-menu')
    mobileLogo.classList.add('opened-menu')
    nav.classList.add('opened-menu')
    body.classList.add('opened-menu')
  })
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault()
    hideMenu.classList.remove('is-open')
    logo.classList.remove('opened-menu')
    mobileLogo.classList.remove('opened-menu')
    nav.classList.remove('opened-menu')
    body.classList.remove('opened-menu')
  })
})

//burger


//openMobileNav

$(() => {
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.header__nav');
  const mobileLogo = document.querySelector('.mobile-logo');
  const header = document.querySelector('.header');
  let body = document.querySelector('body')

  burger.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger--active');
    mobileNav.classList.toggle('is-open')
    mobileLogo.classList.toggle('menu-in')
    header.classList.toggle('menu-in')
    body.classList.toggle('menu-in')
  })

})

//openPopup

$(()=>{
  $('[data-fancybox]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionEffect: "rotate",
    transitionDuration: 400,
  });
})



