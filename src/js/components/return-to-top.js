export default ({ start = 200 } = {}) => {
  const returnToTop = document.querySelector('.return-to-top')

  if (!returnToTop) return

  returnToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })

  window.addEventListener(
    'scroll',
    () => {
      let showAt = start

      if (!isNaN(returnToTop.dataset.showAt)) {
        showAt = parseFloat(returnToTop.dataset.showAt)
      }

      if (window.scrollY < showAt) {
        returnToTop.classList.remove('visible')
        return
      }

      returnToTop.classList.add('visible')
    },
    {
      passive: true
    }
  )
}
