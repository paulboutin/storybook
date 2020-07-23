export default () => {
  const selects = Array.from(document.querySelectorAll('.select'))

  selects.forEach(select => {
    const input = select.querySelector('.select-input')
    const value = select.querySelector('.select-value')
    const placeholder = select.querySelector('.select-placeholder')
    const options = select.querySelectorAll('.select-option')

    placeholder.textContent = value.textContent

    select.addEventListener('click', e => {
      if (select.classList.contains('select-open')) {
        select.classList.remove('select-open')
      } else {
        select.classList.add('select-open')
      }

      if (e.target.classList.contains('select-option')) {
        input.value = e.target.dataset.value
        value.textContent = e.target.textContent

        options.forEach(opt => opt.classList.remove('select-option-selected'))
        e.target.classList.add('select-option-selected')
      }
    })
  })
}
