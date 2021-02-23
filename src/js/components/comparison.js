function slide(row, slide) {
  row.style.transform = `translate(${slide * -50}%, 0)`
}

function updatePagination(pagination, prev, next, current, total) {
  pagination.innerText = `Viewing ${current + 1}-${current + 2} of ${total}`
  prev.disabled = current === 0
  next.disabled = current === total - 2
}

export default () => {
  const comparisonComponents = document.querySelectorAll('.comparison-table')

  comparisonComponents.forEach(comparison => {
    const rows = comparison.querySelectorAll('.comparison-row-wrapper')
    const pagination = comparison.querySelector('.comparison-pagination')
    const prev = comparison.querySelector('.comparison-prev-column')
    const next = comparison.querySelector('.comparison-next-column')
    const totalSlides = comparison.querySelectorAll(
      '.comparison-cta .comparison-column'
    ).length
    let currentSlide = 0

    updatePagination(pagination, prev, next, currentSlide, totalSlides)

    prev.addEventListener('click', () => {
      currentSlide--
      if (currentSlide < 0) currentSlide = 0
      updatePagination(pagination, prev, next, currentSlide, totalSlides)
      rows.forEach(row => slide(row, currentSlide))
    })

    next.addEventListener('click', () => {
      currentSlide++
      if (currentSlide >= totalSlides - 1) currentSlide = totalSlides - 2
      updatePagination(pagination, prev, next, currentSlide, totalSlides)
      rows.forEach(row => slide(row, currentSlide))
    })
  })
}
