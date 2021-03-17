import { debounce } from '../utils'

const StateSelectorPopup = `
<article class="modal-wrapper">
  <div class="modal-overlay">
    <div class="modal-body col-12 col-sm-8 col-lg-6">
      <div class="modal-header">
        <p class="text-h4 font-display">Tell us where you live</p>
        <i class="icon icon-close text-lg modal-cancel"></i>
      </div>
      <div class="modal-content">
        <p class="text-sm">
          Choose your state of legal residence. We can then give you information
          about the products and services available in your area.
        </p>
        <p class="text-sm">
          Note: Bank of the West has branches only in the states listed in the
          drop-down. At this time, we only open accounts for individuals and
          businesses in these states.
        </p>
        <form class="popup-controls" action="#">
          <div class="action-wrapper">
            <div class="dropdown-native-wrapper text-xs">
              <div class="dropdown-native-group">
                <select class="dropdown-native">
                  <option disabled selected hidden>
                    Select your state
                  </option>
                  <option class="dropdown-native-item" value="arizona">
                    Arizona
                  </option>
                  <option class="dropdown-native-item" value="california">
                    California
                  </option>
                  <option class="dropdown-native-item" value="colorado">
                    Colorado
                  </option>
                  <option class="dropdown-native-item" value="idaho">
                    Idaho
                  </option>
                  <option class="dropdown-native-item" value="iowa">
                    Iowa
                  </option>
                  <option class="dropdown-native-item" value="kansas">
                    Kansas
                  </option>
                  <option class="dropdown-native-item" value="missouri">
                    Missouri
                  </option>
                  <option class="dropdown-native-item" value="nebraska">
                    Nebraska
                  </option>
                  <option class="dropdown-native-item" value="new-mexico">
                    New Mexico
                  </option>
                  <option class="dropdown-native-item" value="north-dakota">
                    North Dakota
                  </option>
                  <option class="dropdown-native-item" value="oklahoma">
                    Oklahoma
                  </option>
                  <option class="dropdown-native-item" value="oregon">
                    Oregon
                  </option>
                  <option class="dropdown-native-item" value="south-dakota">
                    South Dakota
                  </option>
                  <option class="dropdown-native-item" value="utah">
                    Utah
                  </option>
                  <option class="dropdown-native-item" value="washington">
                    Washington
                  </option>
                  <option class="dropdown-native-item" value="wisconsin">
                    Wisconsin
                  </option>
                  <option class="dropdown-native-item" value="wyoming">
                    Wyoming
                  </option>
                </select>
                <i class="icon icon-chevron-down text-lg"></i>
              </div>
            </div>
            <button type="submit" class="button button-primary modal-action">
              <span>Continue</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</article>
`

function renderStateSelectPopup() {
  const modal = new DOMParser().parseFromString(StateSelectorPopup, 'text/html')
    .body.firstChild
  const cancel = modal.querySelector('.modal-cancel')
  cancel.addEventListener('click', () => modal.remove())

  document.body.appendChild(modal)
}

function setup(navigation, carouselInterval) {
  // setup location selector
  const location = navigation.querySelector('.navigation-banner-location')
  location.addEventListener('click', renderStateSelectPopup)

  let currentScroll = 0

  // setup subheader hide/show logic
  window.addEventListener(
    'scroll',
    () => {
      const delta = window.scrollY - currentScroll
      currentScroll = window.scrollY

      if (delta > 0) {
        navigation.classList.remove('navigation-subheader-visible')
        return
      }

      navigation.classList.add('navigation-subheader-visible')
    },
    {
      passive: true
    }
  )

  navigation.addEventListener('mouseover', () => {
    navigation.classList.add('navigation-subheader-visible')
  })

  // setup banner notice carousel
  const noticeItems = navigation.querySelectorAll(
    '.navigation-banner-notice-item'
  )

  setInterval(() => {
    let current = navigation.querySelector(
      '.navigation-banner-notice-item.current.active'
    )

    if (!current) {
      current = noticeItems[0]
      current.classList.add('current', 'active')
      return
    }

    current.classList.remove('active')

    const next = current.nextSibling || noticeItems[0]

    next.classList.add('current')

    setTimeout(() => {
      current.classList.remove('current')
      next.classList.add('active')
    }, 300)
  }, carouselInterval + 300)
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
    if (category.dataset.menu) {
      const menu = navigation.querySelector(category.dataset.menu)
      const back = menu.querySelector('.navigation-category-menu-back')

      category.addEventListener('click', () => {
        menu.classList.add('navigation-menu-open')
      })

      back.addEventListener('click', () => {
        menu.classList.remove('navigation-menu-open')
      })
    }
  })
}

function showCTA(CTAs, activeCTA) {
  console.log(CTAs, activeCTA)
  CTAs.forEach(CTA => CTA.classList.remove('navigation-cta-active'))
  activeCTA.classList.add('navigation-cta-active')
}

function hideDropdown(navigation, dropdowns, section, dropdown, product) {
  navigation.classList.remove('navigation-dropdowns-open')
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
        hideDropdown(
          navigation,
          dropdowns,
          dropdownSection,
          activeDropdown,
          activeProduct
        )
      }

      product.classList.add('navigation-header-product-active')
      dropdownSection.classList.add('navigation-dropdown-section-active')
      dropdown.classList.add('navigation-dropdown-active')
      dropdowns.classList.add('navigation-dropdowns-active')
      navigation.classList.add('navigation-dropdowns-open')
    })

    product.addEventListener('mouseleave', e => {
      if (!dropdowns.contains(e.relatedTarget)) {
        hideDropdown(navigation, dropdowns, dropdownSection, dropdown, product)
      }
    })

    dropdowns.addEventListener('mouseleave', e => {
      const activeSubheader = document.querySelector(
        '.navigation-header-products-active'
      )
      if (!activeSubheader.contains(e.relatedTarget)) {
        product.classList.remove('navigation-header-product-active')
        hideDropdown(navigation, dropdowns, dropdownSection, dropdown, product)
      }
    })
  })
}

export default ({ carouselInterval = 5000 } = {}) => {
  const navigation = document.querySelector('.navigation')
  if (!navigation) return

  setup(navigation, carouselInterval)
  mobileSetup(navigation)
  desktopSetup(navigation)
}
