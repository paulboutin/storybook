import React from 'react'
import { waitFor } from '@testing-library/dom'
import { mount } from '../utils'

import Accordion from '../../../src/components/base/Accordion'
import fn from '../../../src/js/components/accordion'

describe('Accordion component', () => {
  it('should be interactive', async () => {
    // Arrange
    const component = mount(<Accordion>Lorem ipsum dolor.</Accordion>, fn)

    // Assert
    expect(component).not.toHaveClass('accordion-expanded')

    // Act
    component.click()

    // Assert
    await waitFor(() => {
      expect(component).toHaveClass('accordion-expanded')
      expect(component.querySelector('.accordion-content')).not.toHaveStyle({
        height: 0
      })
    })
  })
})
