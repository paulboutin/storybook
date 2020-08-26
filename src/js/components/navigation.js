export default () => {
  const navigation = document.querySelector('.navigation')
  const menusWrapper = navigation.querySelector('.navigation-menus')
  const hamburger = navigation.querySelector('.hamburger')
  const mainMenu = navigation.querySelector('.navigation-main-menu')
  const loginButton = navigation.querySelector('#navigation-login-button')
  const loginMenu = navigation.querySelector('.navigation-login-menu')
  const categories = navigation.querySelectorAll(
    '.navigation-main-menu-category'
  )

  menusWrapper.style.top = `${navigation.clientHeight}px`

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
