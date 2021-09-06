/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */


//openHideMenu
$(() => {
  let openElem = document.querySelector('.js-open-hide-menu')
  let hideMenu = document.querySelector('.hide-menu')
  let closeBtn = document.querySelector('.js-close-hide-menu')
  openElem.addEventListener('click', (event) => {
    event.preventDefault()
    hideMenu.classList.add('active')
  })
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault()
    hideMenu.classList.remove('active')
  })
})

