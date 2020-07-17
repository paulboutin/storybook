const toggleActive = el => event => {
  if (!event.currentTarget.value.length) {
    el.classList.toggle('active')
  }
}

const passwordToggle = el => event => {
  const isVisible = el.type === 'text'
  el.type = isVisible ? 'password' : 'text'
  event.currentTarget.classList.toggle('visible')
}

export default () => {
  const inputs = Array.from(document.querySelectorAll('.input-block'))

  inputs.forEach(input => {
    const control = input.querySelector('.input-control')
    control.addEventListener('focus', toggleActive(input))
    control.addEventListener('blur', toggleActive(input))

    if (control.type === 'password') {
      const passwordControl = input.querySelector('.input-password-control')
      passwordControl.addEventListener('click', passwordToggle(control))
    }
  })
}
