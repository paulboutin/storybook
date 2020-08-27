import { debounce } from '../utils'

function setup(navigation) {
  const location = navigation.querySelector('.navigation-banner-location')

  location.addEventListener('click', () => {
    alert('Not implemented')
  })
}

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

function hideDropdown(dropdowns, dropdown, product) {
  product.classList.remove('navigation-header-product-active')
  dropdown.classList.remove('navigation-dropdown-active')
  dropdowns.classList.remove('navigation-dropdowns-active')
}

function desktopSetup(navigation) {
  const categories = navigation.querySelectorAll('.navigation-header-category')
  const products = navigation.querySelectorAll('.navigation-header-product')
  const dropdowns = navigation.querySelector('.navigation-dropdowns')

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

  products.forEach(product => {
    const dropdown = navigation.querySelector(product.dataset.dropdown)

    product.addEventListener('mouseenter', () => {
      const activeDropdown = document.querySelector(
        '.navigation-dropdown-active'
      )
      if (activeDropdown) {
        const activeProduct = document.querySelector(
          '.navigation-header-product-active'
        )
        hideDropdown(dropdowns, activeDropdown, activeProduct)
      }

      product.classList.add('navigation-header-product-active')
      dropdown.classList.add('navigation-dropdown-active')
      dropdowns.classList.add('navigation-dropdowns-active')
    })

    product.addEventListener('mouseleave', e => {
      if (!dropdowns.contains(e.relatedTarget)) {
        hideDropdown(dropdowns, dropdown, product)
      }
    })

    dropdowns.addEventListener('mouseleave', e => {
      const activeSubheader = document.querySelector(
        '.navigation-header-products-active'
      )
      if (!activeSubheader.contains(e.relatedTarget)) {
        product.classList.remove('navigation-header-product-active')
        hideDropdown(dropdowns, dropdown, product)
      }
    })
  })
}

export default () => {
  const navigation = document.querySelector('.navigation')
  if (!navigation) return

  setup(navigation)
  mobileSetup(navigation)
  desktopSetup(navigation)
}
