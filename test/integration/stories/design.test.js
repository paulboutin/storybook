import { getStoryUrl } from '../utils'

describe('Design', () => {
  const stories = ['colors', 'typography', 'fonts', 'spacing', 'grid']

  stories.forEach(story => {
    describe(story, () => {
      it('matches snapshot', async () => {
        // Arrange
        const url = getStoryUrl('design-system', story)

        // Act
        await page.goto(url, { waitUntil: 'networkidle2' })
        const image = await page.screenshot({ fullPage: true })

        // Assert
        expect(image).toMatchImageSnapshot()
      })
    })
  })
})
