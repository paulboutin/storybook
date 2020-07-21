export default (story, params) => {
  const storiesWithPadding = ['Design System', 'Components/Base']

  document.body.classList.toggle(
    'sb:base-padding',
    storiesWithPadding.includes(params.kind)
  )

  return story()
}
