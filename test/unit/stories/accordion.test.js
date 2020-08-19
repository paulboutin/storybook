import React from 'react'
import { waitFor } from '@testing-library/dom'
import { mount } from '../utils'

import Accordion from '../../../src/components/base/Accordion'
import fn from '../../../src/js/components/accordion'

describe('Accordion component', () => {
  it('should be interactive', async () => {
    // Arrange
    const accordion = mount(<Accordion>Lorem ipsum dolor.</Accordion>, fn)
    const summary = accordion.querySelector('.accordion-summary')
    const content = accordion.querySelector('.accordion-content')

    // Assert
    expect(accordion).not.toHaveClass('accordion-expanded')

    // Act
    summary.click()

    // Assert
    await waitFor(() => {
      expect(accordion).toHaveClass('accordion-expanded')
      expect(content).not.toHaveStyle({ height: 0 })
    })
  })
})
