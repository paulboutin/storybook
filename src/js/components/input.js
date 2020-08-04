const toggleActive = el => event => {
  if (!event.currentTarget.value.length) {
    el.classList.toggle('input-active')
  }
}

const passwordToggle = el => event => {
  const isVisible = el.type === 'text'
  el.type = isVisible ? 'password' : 'text'
  event.currentTarget.classList.toggle('icon-show')
  event.currentTarget.classList.toggle('icon-hide')
}

const textareaCount = el => event => {
  el.textContent = `${event.currentTarget.textLength}/${event.currentTarget.maxLength}`
}

export default () => {
  const inputs = document.querySelectorAll('.input-block')

  inputs.forEach(input => {
    const control = input.querySelector('.input-control')
    control.addEventListener('focus', toggleActive(input))
    control.addEventListener('blur', toggleActive(input))

    switch (control.type) {
      case 'password':
        const passwordControl = input.querySelector('.input-password-control')
        passwordControl.addEventListener('click', passwordToggle(control))
        break

      case 'textarea':
        if (control.maxLength) {
          const textareaControl = document.createElement('span')
          textareaControl.textContent = `${control.textLength}/${control.maxLength}`
          textareaControl.classList.add('input-textarea-control')
          input.appendChild(textareaControl)

          control.addEventListener('input', textareaCount(textareaControl))
        }
    }
  })
}
