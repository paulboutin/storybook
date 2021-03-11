import { debounce } from '../utils'

function setup(navigation) {
  const location = navigation.querySelector('.navigation-banner-location')

  location.addEventListener('click', () => {
    alert('Not implemented')
  })
}

function positionMenus() {
  const navigation = document.querySelector('.navigation')
  if (!navigation) return

  const { y } = navigation.getBoundingClientRect()

  const menusWrapper = navigation.querySelector('.navigation-menus')
  menusWrapper.style.top = `${navigation.clientHeight + y}px`
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

      document.body.classList.remove('navigation-open')
      hamburger.classList.remove('is-active')
      mainMenu.classList.remove('navigation-menu-open')
      loginMenu.classList.remove('navigation-menu-open')

      if (openCategoryMenu) {
        openCategoryMenu.classList.remove('navigation-menu-open')
      }
    } else {
      positionMenus()
      document.body.classList.add('navigation-open')
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

function showCTA(CTAs, activeCTA) {
  console.log(CTAs, activeCTA)
  CTAs.forEach(CTA => CTA.classList.remove('navigation-cta-active'))
  activeCTA.classList.add('navigation-cta-active')
}

function hideDropdown(dropdowns, section, dropdown, product) {
  product.classList.remove('navigation-header-product-active')
  section.classList.remove('navigation-dropdown-section-active')
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
      category.classList.add('navigation-header-category-active')
      if (activeSubheader) {
        activeSubheader.classList.remove('navigation-header-products-active')
      }
      if (subheader) {
        subheader.classList.add('navigation-header-products-active')
      }

      const activeCTA = navigation.querySelector(category.dataset.ctaAction)
      if (activeCTA) {
        const CTAs = navigation.querySelectorAll(
          '.navigation-header-cta-wrapper'
        )
        showCTA(CTAs, activeCTA)
      }
    })
  })

  products.forEach(product => {
    const dropdownSection = navigation.querySelector(
      product.dataset.dropdownSection
    )

    const dropdown = navigation.querySelector(product.dataset.dropdownProduct)

    product.addEventListener('mouseenter', () => {
      const activeDropdown = document.querySelector(
        '.navigation-dropdown-active'
      )
      if (activeDropdown) {
        const activeProduct = document.querySelector(
          '.navigation-header-product-active'
        )
        hideDropdown(dropdowns, dropdownSection, activeDropdown, activeProduct)
      }

      product.classList.add('navigation-header-product-active')
      dropdownSection.classList.add('navigation-dropdown-section-active')
      dropdown.classList.add('navigation-dropdown-active')
      dropdowns.classList.add('navigation-dropdowns-active')
    })

    product.addEventListener('mouseleave', e => {
      if (!dropdowns.contains(e.relatedTarget)) {
        hideDropdown(dropdowns, dropdownSection, dropdown, product)
      }
    })

    dropdowns.addEventListener('mouseleave', e => {
      const activeSubheader = document.querySelector(
        '.navigation-header-products-active'
      )
      if (!activeSubheader.contains(e.relatedTarget)) {
        product.classList.remove('navigation-header-product-active')
        hideDropdown(dropdowns, dropdownSection, dropdown, product)
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
