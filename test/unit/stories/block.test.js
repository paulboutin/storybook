import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { waitFor } from '@testing-library/dom'

import { Block } from '../../../src/stories/components/layout/FAQ'
import fn from '../../../src/js/components/accordion'

describe('Block component', () => {
  it('should be interactive', async () => {
    // Arrange
    document.body.innerHTML = renderToStaticMarkup(
      <Block>Lorem ipsum dolor.</Block>
    )
    fn()

    const el = document.querySelector('.accordion')

    // Assert
    expect(el).not.toHaveClass('accordion-expanded')

    // Act
    el.click()

    // Assert
    await waitFor(() => {
      expect(el).toHaveClass('accordion-expanded')
      expect(el.querySelector('.accordion-content')).not.toHaveStyle({
        height: 0
      })
    })
  })
})
