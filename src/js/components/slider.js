function slide(slider, slide, direction) {
  const axis = slider.dataset.axis
  const activeSlide = slider.querySelector('.slider-slide-active')
  const nextSlide = slider.querySelector(`.slider-slide:nth-child(${slide})`)

  nextSlide.classList.add('slider-slide-disabled')
  nextSlide.style.transform = getTransform(-100, axis)
  nextSlide.style.opacity = 1
  triggerRepaint(nextSlide)

  requestAnimationFrame(() => {
    nextSlide.classList.remove('slider-slide-disabled')
    nextSlide.style.transform = 'translate(0, 0)'
    activeSlide.style.transform = getTransform(100 * direction, axis)
    activeSlide.style.opacity = 0

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
  const sliderContainers = document.querySelectorAll('.slider-container')

  sliderContainers.forEach(sliderContainer => {
    const prevTrigger = document.querySelector(
      sliderContainer.dataset.prevTrigger
    )
    const nextTrigger = document.querySelector(
      sliderContainer.dataset.nextTrigger
    )
    const pagination = document.querySelector(
      sliderContainer.dataset.pagination
    )

    const sliders = sliderContainer.querySelectorAll('.slider')
    let currentSlide = 1
    let totalSlides = 0

    sliders.forEach(slider => {
      const width = slider.clientWidth
      slider.classList.add('slider-tmp')
      slider.style.width = `${width}px`

      const slides = Array.from(slider.querySelectorAll('.slider-slide'))
      const maxHeight = Math.max(...slides.map(slide => slide.clientHeight))
      slider.style.height = `${maxHeight}px`

      slider.classList.add('slider-ready')
      slider.classList.remove('slider-tmp')

      slides[0].classList.add('slider-slide-active')
      totalSlides = slides.length
    })

    updatePagination(pagination, currentSlide, totalSlides)

    prevTrigger.addEventListener('click', () => {
      currentSlide--
      if (currentSlide < 1) currentSlide = totalSlides
      updatePagination(pagination, currentSlide, totalSlides)
      sliders.forEach(slider => slide(slider, currentSlide, -1))
    })

    nextTrigger.addEventListener('click', () => {
      currentSlide++
      if (currentSlide > totalSlides) currentSlide = 1
      updatePagination(pagination, currentSlide, totalSlides)
      sliders.forEach(slider => slide(slider, currentSlide, 1))
    })
  })
}
