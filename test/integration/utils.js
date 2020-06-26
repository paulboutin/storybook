export const getStoryUrl = (selectedKind, selectedStory) => {
  const BASE_URL = `http://localhost:${process.env.PORT}/iframe.html`

  const searchParams = new URLSearchParams()
  searchParams.append('selectedKind', selectedKind)
  searchParams.append('selectedStory', selectedStory)

  return BASE_URL + '?' + searchParams.toString()
}
