import { debounce } from '../utils'

function positionMenus() {
  const navigation = document.querySelector('.navigation')
  const menusWrapper = navigation.querySelector('.navigation-menus')
  menusWrapper.style.top = `${navigation.clientHeight}px`
}

function mobileSetup(navigation) {
  const hamburger = navigation.querySelector('.hamburger')
  const mainMenu = navigation.querySelector('.navigation-main-menu')
  const loginButton = navigation.querySelector('#navigation-login-button')
  const loginMenu = navigation.querySelector('.navigation-login-menu')
  const categories = navigation.querySelectorAll(
    '.navigation-main-menu-category'
  )

  positionMenus()
  window.addEventListener('resize', debounce(positionMenus, 50))

  hamburger.addEventListener('click', () => {
    if (mainMenu.classList.contains('navigation-menu-open')) {
      const openCategoryMenu = navigation.querySelector(
        '.navigation-category-menu.navigation-menu-open'
      )

      hamburger.classList.remove('is-active')
      mainMenu.classList.remove('navigation-menu-open')
      loginMenu.classList.remove('navigation-menu-open')

      if (openCategoryMenu) {
        openCategoryMenu.classList.remove('navigation-menu-open')
      }
    } else {
      hamburger.classList.add('is-active')
      mainMenu.classList.add('navigation-menu-open')
    }
  })

  loginButton.addEventListener('click', () => {
    loginMenu.classList.add('navigation-menu-open')
  })

  categories.forEach(category => {
    const menu = navigation.querySelector(category.dataset.menu)
    const back = menu.querySelector('.navigation-category-menu-back')

    category.addEventListener('click', () => {
      menu.classList.add('navigation-menu-open')
    })

    back.addEventListener('click', () => {
      menu.classList.remove('navigation-menu-open')
    })
  })
}

function desktopSetup(navigation) {
  const categories = navigation.querySelectorAll('.navigation-header-category')

  categories.forEach(category => {
    const subheader = navigation.querySelector(category.dataset.subheader)

    category.addEventListener('click', () => {
      const activeCategory = navigation.querySelector(
        '.navigation-header-category-active'
      )
      const activeSubheader = navigation.querySelector(
        '.navigation-header-products-active'
      )

      activeCategory.classList.remove('navigation-header-category-active')
      activeSubheader.classList.remove('navigation-header-products-active')
      category.classList.add('navigation-header-category-active')
      subheader.classList.add('navigation-header-products-active')
    })
  })
}

export default () => {
  const navigation = document.querySelector('.navigation')
  if (!navigation) return

  mobileSetup(navigation)
  desktopSetup(navigation)
}
