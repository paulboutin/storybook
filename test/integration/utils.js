export const getStoryUrl = (selectedKind, selectedStory) => {
  const BASE_URL = `http://localhost:${process.env.PORT}/iframe.html`

  const searchParams = new URLSearchParams()
  searchParams.append('selectedKind', selectedKind)
  searchParams.append('selectedStory', selectedStory)

  return BASE_URL + '?' + searchParams.toString()
}

export const buildSnapshotTests = block => stories => {
  stories.forEach(story => {
    describe(story, () => {
      it('matches snapshot', async () => {
        // Arrange
        const url = getStoryUrl(block, story)

        // Act
        await page.goto(url, { waitUntil: 'networkidle2' })
        const image = await page.screenshot({ fullPage: true })

        // Assert
        expect(image).toMatchImageSnapshot()
      })
    })
  })
}
