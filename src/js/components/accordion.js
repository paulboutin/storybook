const toggleSiblings = target => {
  const siblings = target.parentNode.querySelectorAll('.accordion')
  siblings.forEach(accordion => {
    accordion.classList.remove('accordion-expanded')
    accordion.querySelector('.accordion-content').style.height = '0'
  })
}

export default () => {
  const accordions = document.querySelectorAll('.accordion')

  accordions.forEach(accordion => {
    const toggleMode = accordion.dataset.toggleMode
    const summary = accordion.querySelector('.accordion-summary')
    const content = accordion.querySelector('.accordion-content')

    summary.addEventListener('click', () => {
      if (accordion.classList.contains('accordion-expanded')) {
        content.style.height = getComputedStyle(content).height
        content.style.transitionProperty = 'all'

        requestAnimationFrame(() => {
          if (toggleMode) toggleSiblings(accordion)

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
          if (toggleMode) {
            toggleSiblings(accordion)
            accordion.scrollIntoView({ behavior: 'smooth' })
          }

          content.style.height = height
          accordion.classList.add('accordion-expanded')
        })
      }
    })
  })
}
