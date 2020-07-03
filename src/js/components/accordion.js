const accordions = Array.from(document.querySelectorAll('.accordion'))

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    const content = accordion.querySelector('.accordion-content')

    if (accordion.classList.contains('accordion-expanded')) {
      content.style.height = getComputedStyle(content).height
      content.style.transitionProperty = 'height'

      requestAnimationFrame(() => {
        content.style.height = '0'
        accordion.classList.remove('accordion-expanded')
      })
    } else {
      content.style.transitionProperty = 'none'
      content.style.height = 'auto'
      const height = getComputedStyle(content).height
      content.style.height = '0'
      content.style.transitionProperty = 'height'

      requestAnimationFrame(() => {
        content.style.height = height
        accordion.classList.add('accordion-expanded')
      })
    }
  })
})
