export default () => {
  const navigation = document.querySelector('.navigation')
  const hamburger = navigation.querySelector('.navigation-hamburger')
  const menu = navigation.querySelector('.navigation-menu')
  const categories = menu.querySelectorAll('.navigation-menu-category')
  const categoryMenus = navigation.querySelectorAll('.navigation-category-menu')

  menu.style.top = `${navigation.clientHeight}px`

  categoryMenus.forEach(categoryMenu => {
    categoryMenu.style.top = `${navigation.clientHeight}px`
  })

  hamburger.addEventListener('click', () => {
    const categoryMenu = navigation.querySelector(
      '.navigation-category-menu-open'
    )
    menu.classList.toggle('navigation-menu-open')

    if (categoryMenu) {
      categoryMenu.classList.remove('navigation-category-menu-open')
    }
  })

  categories.forEach(category => {
    const categoryMenu = navigation.querySelector(category.dataset.menu)
    const categoryMenuBack = categoryMenu.querySelector(
      '.navigation-category-menu-back'
    )

    category.addEventListener('click', () => {
      categoryMenu.classList.add('navigation-category-menu-open')
    })

    categoryMenuBack.addEventListener('click', () => {
      categoryMenu.classList.remove('navigation-category-menu-open')
    })
  })
}
