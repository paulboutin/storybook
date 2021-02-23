import React from 'react'
import { waitFor } from '@testing-library/dom'
import { mount } from '../utils'
import ProductSelector from '../../../src/components/layout/ProductSelector'
import fn from '../../../src/js/components/product-selector'

const testItems = [
  {
    tab: 'Item 1',
    title: 'Product Title',
    text: 'Product information',
    button: 'Label',
    cta: 'Call to Action',
    image: '/img/plant.png'
  },
  {
    tab: 'Item 2',
    title: 'Product Title',
    text: 'Product information',
    button: 'Label',
    cta: 'Call to Action',
    image: '/img/plant.png'
  },
  {
    tab: 'Item 3',
    title: 'Product Title',
    text: 'Product information',
    button: 'Label',
    cta: 'Call to Action',
    image: '/img/plant.png'
  }
]

describe('ProductSelector component', () => {
  it('should be interactive', async () => {
    const mockScroll = jest.fn()

    window.Element.prototype.scrollTo = mockScroll

    // Arrange
    const container = mount(
      <ProductSelector items={testItems} headline='foo' />,
      fn
    )

    const items = container.querySelectorAll('.product-selector-item')
    const tabs = container.querySelectorAll('.product-selector-tab')

    // Assert
    expect(items[0]).toHaveClass('active')

    // Act
    tabs[2].click()

    // Assert
    await waitFor(() => {
      expect(items[0]).not.toHaveClass('active')
      expect(items[2]).toHaveClass('active')
      expect(mockScroll).toHaveBeenCalled()
    })
  })
})
