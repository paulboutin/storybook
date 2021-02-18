export default () => {
  const modals = document.querySelectorAll('.modal-wrapper')

  modals.forEach(modal => {
    const close = modal.querySelector('.icon-close')

    document.body.classList.add('modal-active')

    close.addEventListener('click', () => {
      modal.remove()
      document.body.classList.remove('modal-active')
    })
  })
}
