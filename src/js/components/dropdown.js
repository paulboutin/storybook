export default () => {
  const dropdowns = document.querySelectorAll('.dropdown')

  dropdowns.forEach(dropdown => {
    const input = dropdown.querySelector('.dropdown-input')
    const value = dropdown.querySelector('.dropdown-value')
    const placeholder = dropdown.querySelector('.dropdown-placeholder')

    placeholder.textContent = value.textContent

    const handleEvent = e => {
      if (input.disabled) return

      dropdown.classList.toggle('dropdown-open')
      dropdown.classList.toggle('dropdown-keyboard', e.type === 'keypress')

      if (e.target.classList.contains('dropdown-item')) {
        if (e.target.tagName === 'A') {
          window.top.location.href = e.target.href
          return
        }

        input.value = e.target.dataset.value
        value.textContent = e.target.textContent

        const oldIcon = dropdown.querySelector('.dropdown-item .icon')
        if (oldIcon) oldIcon.remove()

        const newIcon = document.createElement('i')
        newIcon.className = 'icon icon-check-solid'
        e.target.appendChild(newIcon)
      }

      dropdown.focus()
    }

    dropdown.addEventListener('click', handleEvent)

    dropdown.addEventListener('keypress', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleEvent(e)
      }
    })

    dropdown.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('dropdown-open')
      }
    })

    dropdown.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!dropdown.contains(document.activeElement)) {
          dropdown.classList.remove('dropdown-open')
        }
      }, 0)
    })
  })
}
