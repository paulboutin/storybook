export default () => {
  const selects = Array.from(document.querySelectorAll('.select'))

  selects.forEach(select => {
    const input = select.querySelector('.select-input')
    const value = select.querySelector('.select-value')
    const placeholder = select.querySelector('.select-placeholder')
    const options = select.querySelectorAll('.select-option')

    placeholder.textContent = value.textContent

    const handleSelect = e => {
      if (input.disabled) return

      select.classList.toggle('select-open')
      select.classList.toggle('select-keyboard', e.type === 'keypress')

      if (e.target.classList.contains('select-option')) {
        input.value = e.target.dataset.value
        value.textContent = e.target.textContent

        options.forEach(opt => opt.classList.remove('select-option-selected'))
        e.target.classList.add('select-option-selected')
      }

      select.focus()
    }

    select.addEventListener('click', handleSelect)

    select.addEventListener('keypress', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleSelect(e)
      }
    })

    select.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        select.classList.remove('select-open')
      }
    })

    select.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!select.contains(document.activeElement)) {
          select.classList.remove('select-open')
        }
      }, 0)
    })
  })
}
