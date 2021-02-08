export default () => {
  const productSelectors = document.querySelectorAll('.product-selector')

  productSelectors.forEach(productSelector => {
    const controls = productSelector.querySelector('.product-selector-tabs')
    const tabs = productSelector.querySelectorAll('.product-selector-tab')
    const container = productSelector.querySelector('.product-selector-items')
    const items = productSelector.querySelectorAll('.product-selector-item')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const index = parseInt(tab.dataset.index)

        tabs.forEach(tab => {
          tab.classList.remove('active')
        })

        tab.classList.add('active')

        window.requestAnimationFrame(() => {
          controls.scrollTo({
            left: tab.offsetLeft - tab.scrollWidth / 2 - controls.offsetLeft,
            behavior: 'smooth'
          })

          container.scrollTo({
            left: items[index].offsetLeft - container.offsetLeft,
            behavior: 'smooth'
          })
        })
      })
    })
  })
}
