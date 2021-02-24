export default () => {
  const storytellers = document.querySelectorAll('.storytelling')

  storytellers.forEach(storyteller => {
    const items = storyteller.querySelectorAll('.storytelling-item')

    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(i => {
          i.classList.remove('expanded')
          i.classList.add('collapsed')
        })

        item.classList.remove('collapsed')
        item.classList.add('expanded')
      })
    })
  })
}
