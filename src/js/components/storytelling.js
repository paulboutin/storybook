export default () => {
  const storytellers = document.querySelectorAll('.storytelling')

  storytellers.forEach(storyteller => {
    const items = storyteller.querySelectorAll('.storytelling-item')

    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(i => {
          const icon = i.querySelector('.icon')
          icon.classList.remove('icon-minus')
          icon.classList.add('icon-plus')
          i.classList.remove('expanded')
        })

        item.classList.add('expanded')

        const icon = item.querySelector('.icon')
        icon.classList.remove('icon-plus')
        icon.classList.add('icon-minus')
      })
    })
  })
}
