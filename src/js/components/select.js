export default () => {
  const selects = Array.from(document.querySelectorAll('.select'))

  selects.forEach(select => {
    const input = select.querySelector('.select-input')
    const value = select.querySelector('.select-value')
    const placeholder = select.querySelector('.select-placeholder')

    placeholder.textContent = value.textContent

    const handleSelect = e => {
      if (input.disabled) return

      select.classList.toggle('select-open')
      select.classList.toggle('select-keyboard', e.type === 'keypress')

      if (e.target.classList.contains('select-item')) {
        if (e.target.tagName === 'A') {
          window.top.location.href = e.target.href
          return
        }

        input.value = e.target.dataset.value
        value.textContent = e.target.textContent

        const oldIcon = select.querySelector('.select-item .icon')
        if (oldIcon) oldIcon.remove()

        const newIcon = document.createElement('i')
        newIcon.className = 'icon icon-check-solid'
        e.target.appendChild(newIcon)
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
