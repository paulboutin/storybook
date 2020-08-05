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

    const sliders = sliderContainer.querySelectorAll('.slider')

    sliders.forEach(slider => {
      const width = slider.clientWidth
      slider.classList.add('slider-tmp')
      slider.style.width = `${width}px`

      const slides = Array.from(slider.querySelectorAll('.slider-slide'))
      const maxHeight = Math.max(...slides.map(slide => slide.clientHeight))
      slider.style.height = `${maxHeight}px`

      slider.classList.add('slider-ready')
      slider.classList.remove('slider-tmp')
    })

    prevTrigger.addEventListener('click', () => {
      alert('prev slide')
    })

    nextTrigger.addEventListener('click', () => {
      alert('next slide')
    })
  })
}
