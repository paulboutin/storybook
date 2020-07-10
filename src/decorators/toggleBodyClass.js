export default (story, params) => {
  document.body.classList.toggle(
    'layout-component',
    params.kind === 'Components/Layout'
  )
  return story()
}
