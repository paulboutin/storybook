const viewports = {
  mobile: { width: 480, height: 800, isMobile: true },
  tablet: { width: 992, height: 558 },
  desktop: { width: 1600, height: 900 }
}

const defaultDevices = ['mobile', 'tablet']

export const getStoryUrl = ({ block, component, ...extra }) => {
  const BASE_URL = `http://localhost:${process.env.PORT}/iframe.html`

  const searchParams = new URLSearchParams()

  searchParams.append('id', [block, component].join('--'))
  Object.entries(extra).forEach(([key, value]) => {
    searchParams.append(key, String(value))
  })

  return BASE_URL + '?' + searchParams.toString()
}

export const buildSnapshotTests = block => stories => {
  stories.forEach(story => {
    if (typeof story === 'string') {
      story = { title: story, component: story }
    }

    const { title, devices = defaultDevices, ...params } = story
    const testViewports = devices.reduce(
      (currentViewports, device) => ({
        ...currentViewports,
        [device]: viewports[device]
      }),
      {}
    )

    describe(title, () => {
      Object.entries(testViewports).forEach(([device, viewport]) => {
        it(`matches snapshot on ${device}`, async () => {
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
