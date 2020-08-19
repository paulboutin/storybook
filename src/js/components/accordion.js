export default () => {
  const accordions = document.querySelectorAll('.accordion')

  accordions.forEach(accordion => {
    const summary = accordion.querySelector('.accordion-summary')
    const content = accordion.querySelector('.accordion-content')

    summary.addEventListener('click', () => {
      if (accordion.classList.contains('accordion-expanded')) {
        content.style.height = getComputedStyle(content).height
        content.style.transitionProperty = 'all'

        requestAnimationFrame(() => {
          content.style.height = '0'
          accordion.classList.remove('accordion-expanded')
        })
      } else {
        content.style.transitionProperty = 'none'
        content.style.height = 'auto'
        const height = getComputedStyle(content).height
        content.style.height = '0'
        content.style.transitionProperty = 'all'

        requestAnimationFrame(() => {
          content.style.height = height
          accordion.classList.add('accordion-expanded')
        })
      }
    })
  })
}
