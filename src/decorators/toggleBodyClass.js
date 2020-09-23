export default (story, params) => {
  const storiesWithPadding = ['Design System', 'Base Components']

  document.body.classList.toggle(
    'sb:base-padding',
    storiesWithPadding.some(kind => params.kind.includes(kind))
  )

  return story()
}
