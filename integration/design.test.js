import { getStoryUrl } from './utils'

describe('Design', () => {
  it('matches snapshot', async () => {
    // Arrange
    const url = getStoryUrl('design-system', 'colors')

    // Act
    await page.goto(url)
    const image = await page.screenshot({ fullPage: true })

    // Assert
    expect(image).toMatchImageSnapshot()
  })
})
