export default () => {
  const alerts = document.querySelectorAll('.alert')

  alerts.forEach(alert => {
    const close = alert.querySelector('.icon-close')

    const handleCloseAlert = () => {
      alert.classList.add('alert-closed')
      setTimeout(() => alert.remove(), 1000)
    }

    if (close) {
      close.addEventListener('click', handleCloseAlert)
    }
  })
}
