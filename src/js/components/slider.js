import { debounce } from '../utils'

function setup() {
  const containers = document.querySelectorAll('.slider-container')

  containers.forEach(container => {
    const sliders = container.querySelectorAll('.slider')

    sliders.forEach(slider => {
      slider.classList.remove('slider-ready')
      slider.style.width = null
      slider.style.height = null
      triggerRepaint(slider)

      requestAnimationFrame(() => {
        const width = slider.clientWidth
        slider.classList.add('slider-tmp')
        slider.style.width = `${width}px`

        const slides = Array.from(slider.querySelectorAll('.slider-slide'))
        const maxHeight = Math.max(...slides.map(slide => slide.clientHeight))
        slider.style.height = `${maxHeight}px`

        slider.classList.add('slider-ready')
        slider.classList.remove('slider-tmp')

        const activeSlide = slides.find(slide =>
          slide.classList.contains('slider-slide-active')
        )
        if (!activeSlide) {
          slides[0].classList.add('slider-slide-active')
        }
      })
    })
  })
}

function slide(slider, slide, direction) {
  const axis = slider.dataset.axis
  const activeSlide = slider.querySelector('.slider-slide-active')
  const nextSlide = slider.querySelector(`.slider-slide:nth-child(${slide})`)

  nextSlide.classList.add('slider-slide-disabled')
  nextSlide.style.transform = getTransform(-100 * direction, axis)
  triggerRepaint(nextSlide)

  requestAnimationFrame(() => {
    nextSlide.classList.remove('slider-slide-disabled')
    nextSlide.style.transform = 'translate(0, 0)'
    activeSlide.style.transform = getTransform(100 * direction, axis)

    nextSlide.classList.add('slider-slide-active')
    activeSlide.classList.remove('slider-slide-active')
  })
}

function updatePagination(pagination, current, total) {
  pagination.innerText = `${current} of ${total}`
}

function getTransform(value, axis) {
  if (axis === 'horizontal') return `translate(${value}%, 0)`
  if (axis === 'vertical') return `translate(0, ${-value}%)`
}

function triggerRepaint(element) {
  element.offsetHeight
}

export default async () => {
  await new Promise(resolve => requestAnimationFrame(resolve))
  const containers = document.querySelectorAll('.slider-container')

  setup()
  window.addEventListener('resize', debounce(setup, 100))

  containers.forEach(container => {
    const prevTrigger = container.querySelector(container.dataset.prevTrigger)
    const nextTrigger = container.querySelector(container.dataset.nextTrigger)
    const pagination = container.querySelector(container.dataset.pagination)
    const sliders = container.querySelectorAll('.slider')
    const totalSlides = sliders.length
      ? sliders[0].querySelectorAll('.slider-slide').length
      : 0
    let currentSlide = 1

    if (pagination) updatePagination(pagination, currentSlide, totalSlides)

    const handlePrev = () => {
      currentSlide--
      if (currentSlide < 1) currentSlide = totalSlides
      if (pagination) updatePagination(pagination, currentSlide, totalSlides)
      sliders.forEach(slider => slide(slider, currentSlide, -1))
    }

    const handleNext = () => {
      currentSlide++
      if (currentSlide > totalSlides) currentSlide = 1
      if (pagination) updatePagination(pagination, currentSlide, totalSlides)
      sliders.forEach(slider => slide(slider, currentSlide, 1))
    }

    prevTrigger.addEventListener('click', handlePrev)
    nextTrigger.addEventListener('click', handleNext)
    container.addEventListener('swiped-left', handlePrev)
    container.addEventListener('swiped-right', handleNext)
  })
}
