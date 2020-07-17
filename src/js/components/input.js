const toggleActive = el => event => {
  if (!event.currentTarget.value.length) {
    el.classList.toggle('active')
  }
}

export default () => {
  const inputs = Array.from(document.querySelectorAll('.input-block'))

  inputs.forEach(input => {
    const control = input.querySelector('.input-control')
    control.addEventListener('focus', toggleActive(input))
    control.addEventListener('blur', toggleActive(input))

    if (control.type === 'password') {
      const passwordControl = input.querySelector('.input-password-control')
      passwordControl.addEventListener('click', () => {
        const isVisible = control.type === 'text'
        control.type = isVisible ? 'password' : 'text'
        passwordControl.classList.toggle('visible')
      })
    }
  })
}
