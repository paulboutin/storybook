import { swipeDetect } from '../utils'

const translate = ({ element, fraction, width }) => {
  element.style.transform = `translateX(-${fraction * width}px)`
}

export default () => {
  const cardCarousels = document.querySelectorAll('.card-carousel')

  cardCarousels.forEach(cardCarousel => {
    const items = cardCarousel.querySelector('.card-carousel-items')
    const firstItem = cardCarousel.querySelector('.card-carousel-item')
    const prev = cardCarousel.querySelector('.card-carousel-prev')
    const next = cardCarousel.querySelector('.card-carousel-next')

    let current = 0
    const total = items.childElementCount

    const handleNext = () => {
      const step = Math.floor(cardCarousel.offsetWidth / firstItem.scrollWidth)

      current++
      translate({
        element: items,
        fraction: current / total,
        width: items.scrollWidth
      })

      if (current > 0) {
        prev.classList.remove('hidden')
      }

      if (current + step > total) {
        next.classList.add('hidden')
      }

      if (step === 1 && current === total - 1) {
        next.classList.add('hidden')
      }
    }

    const handlePrev = () => {
      const step = Math.floor(cardCarousel.offsetWidth / firstItem.scrollWidth)

      current--
      translate({
        element: items,
        fraction: current / total,
        width: items.scrollWidth
      })

      if (current < 1) {
        prev.classList.add('hidden')
      }

      if (current + step < total + 1) {
        next.classList.remove('hidden')
      }
    }

    next.addEventListener('click', handleNext)
    prev.addEventListener('click', handlePrev)

    swipeDetect(cardCarousel, swipeDir => {
      switch (swipeDir) {
        case 'left':
          return handleNext()
        case 'right':
          return handlePrev()
        default:
          return null
      }
    })
  })
}
