export const defaultViewports = {
  '480px': { width: 480, height: 800, isMobile: true },
  '992px': { width: 992, height: 558 }
}

export const getStoryUrl = ({ block, component, ...extra }) => {
  const BASE_URL = `http://localhost:${process.env.PORT}/iframe.html`

  const searchParams = new URLSearchParams()

  searchParams.append('id', [block, component].join('--'))
  Object.entries(extra).forEach(([key, value]) => {
    searchParams.append(key, String(value))
  })

  return BASE_URL + '?' + searchParams.toString()
}

export const buildSnapshotTests = viewports => block => stories => {
  stories.forEach(story => {
    if (typeof story === 'string') {
      story = { title: story, component: story }
    }

    const { title, ...params } = story

    describe(title, () => {
      Object.entries(viewports).forEach(([breakpoint, viewport]) => {
        it(`matches snapshot, ${breakpoint}`, async () => {
          // Arrange
          const url = getStoryUrl({ block, ...params })

          // Act
          await page.setViewport(viewport)
          await page.goto(url, { waitUntil: 'networkidle2' })
          const image = await page.screenshot({ fullPage: true })

          // Assert
          expect(image).toMatchImageSnapshot()
        })
      })
    })
  })
}

export const buildDefaultSnapshotTests = buildSnapshotTests(defaultViewports)
