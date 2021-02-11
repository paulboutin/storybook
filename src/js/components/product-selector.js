import { swipeDetect } from '../utils'

export default () => {
  const productSelectors = document.querySelectorAll('.product-selector')

  productSelectors.forEach(productSelector => {
    const controls = productSelector.querySelector('.product-selector-tabs')
    const tabs = productSelector.querySelectorAll('.product-selector-tab')
    const container = productSelector.querySelector('.product-selector-items')
    const items = productSelector.querySelectorAll('.product-selector-item')

    let current = 0

    const updateActiveTab = tab => {
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })

      tab.classList.add('active')
    }

    const scrollItems = tab => {
      window.requestAnimationFrame(() => {
        controls.scrollTo({
          left: tab.offsetLeft - tab.scrollWidth / 2 - controls.offsetLeft,
          behavior: 'smooth'
        })

        container.scrollTo({
          left: items[current].offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        })
      })
    }

    const handleSwipe = incr => {
      if (current < 1) return

      current = current + incr

      let tab = Array.from(tabs).find(tab => tab.dataset.index === current)

      updateActiveTab(tab)
      scrollItems(tab)
    }

    const handleClick = tab => () => {
      current = parseInt(tab.dataset.index)

      updateActiveTab(tab)
      scrollItems(tab)
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', handleClick(tab))
    })

    swipeDetect(productSelector, swipeDir => {
      switch (swipeDir) {
        case 'left':
          return handleSwipe(1)
        case 'right':
          return handleSwipe(-1)
        default:
          return null
      }
    })
  })
}
