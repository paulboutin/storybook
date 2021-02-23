export default () => {
  const helpCenters = document.querySelectorAll('.help-center-articles')

  helpCenters.forEach(helpCenter => {
    const links = helpCenter.querySelectorAll('.help-center-article-link .link')
    links.forEach(link => {
      link.addEventListener('click', () => {
        const oldArticle = helpCenter.querySelector(
          '.help-center-article-selected'
        )
        const newArticle = document.getElementById(link.dataset.articleId)
        oldArticle.classList.remove('help-center-article-selected')
        newArticle.classList.add('help-center-article-selected')
        newArticle.scrollIntoView({ behavior: 'smooth' })
      })
    })
  })
}
