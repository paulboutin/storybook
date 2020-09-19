export default () => {
  const helpCenter = document.querySelector('.help-center')
  if (!helpCenter) return

  const links = helpCenter.querySelectorAll('.help-center-article-link .link')
  links.forEach(link => {
    link.addEventListener('click', () => {
      const oldArticle = document.querySelector('.help-center-article-selected')
      const newArticle = document.getElementById(link.dataset.articleId)
      oldArticle.classList.remove('help-center-article-selected')
      newArticle.classList.add('help-center-article-selected')
      newArticle.scrollIntoView({ behavior: 'smooth' })
    })
  })
}
