import React from 'react'
import { waitFor } from '@testing-library/dom'
import { mount } from '../utils'

import { FAQBlock } from '../../../src/components/layout/FAQ'
import fn from '../../../src/js/components/accordion'

describe('Block component', () => {
  it('should be interactive', async () => {
    // Arrange
    const component = mount(<FAQBlock>Lorem ipsum dolor.</FAQBlock>, fn)

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
