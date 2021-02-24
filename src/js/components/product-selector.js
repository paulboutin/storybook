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

    const showItem = tab => {
      window.requestAnimationFrame(() => {
        controls.scrollTo({
          left: tab.offsetLeft - tab.scrollWidth / 2 - controls.offsetLeft,
          behavior: 'smooth'
        })

        items.forEach(item => item.classList.remove('active'))
        setTimeout(() => items[current].classList.add('active'), 300)
      })
    }

    const handleSwipe = incr => () => {
      let next = current + incr
      if (next < 0 || next > items.length - 1) return

      current = next

      let tab = Array.from(tabs).find(
        tab => parseInt(tab.dataset.index) === current
      )

      updateActiveTab(tab)
      showItem(tab)
    }

    const handleClick = tab => () => {
      current = parseInt(tab.dataset.index)

      updateActiveTab(tab)
      showItem(tab)
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', handleClick(tab))
    })

    container.addEventListener('swiped-left', handleSwipe(1))
    container.addEventListener('swiped-right', handleSwipe(-1))
  })
}
