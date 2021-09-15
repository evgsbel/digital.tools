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
  let nav = document.querySelector('.hide-menu__nav')
  openElem.addEventListener('click', (event) => {
    event.preventDefault()
    hideMenu.classList.add('is-open')
    logo.classList.add('opened-menu')
    nav.classList.add('opened-menu')
    body.classList.add('opened-menu')
  })
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault()
    hideMenu.classList.remove('is-open')
    logo.classList.remove('opened-menu')
    nav.classList.remove('opened-menu')
    body.classList.remove('opened-menu')
  })
})

