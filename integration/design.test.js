import { getStoryUrl } from './utils'

describe('Design', () => {
  describe('Color System', () => {
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

  describe('Typography', () => {
    it('matches snapshot', async () => {
      // Arrange
      const url = getStoryUrl('design-system', 'typography')

      // Act
      await page.goto(url)
      const image = await page.screenshot({ fullPage: true })

      // Assert
      expect(image).toMatchImageSnapshot()
    })
  })

  describe('Spacing', () => {
    it('matches snapshot', async () => {
      // Arrange
      const url = getStoryUrl('design-system', 'spacing')

      // Act
      await page.goto(url)
      const image = await page.screenshot({ fullPage: true })

      // Assert
      expect(image).toMatchImageSnapshot()
    })
  })

  describe('Grid', () => {
    it('matches snapshot', async () => {
      // Arrange
      const url = getStoryUrl('design-system', 'grid')

      // Act
      await page.goto(url)
      const image = await page.screenshot({ fullPage: true })

      // Assert
      expect(image).toMatchImageSnapshot()
    })
  })
})
