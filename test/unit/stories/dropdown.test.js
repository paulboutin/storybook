import React from 'react'
import { fireEvent, waitFor } from '@testing-library/dom'
import { mount } from '../utils'

import Dropdown from '../../../src/components/base/Dropdown'
import fn from '../../../src/js/components/dropdown'

describe('Dropdown component', () => {
  let component
  let items
  let value

  beforeEach(() => {
    // Arrange
    component = mount(
      <Dropdown label='Label' items={['Item 1', 'Item 2']} />,
      fn
    )
    items = component.querySelector('.dropdown-items')
    value = component.querySelector('.dropdown-value')
  })

  it('should have mouse interactivity', async () => {
    // Assert
    expect(component).not.toHaveClass('dropdown-open')

    // Act
    component.click()

    // Assert
    await waitFor(() => {
      expect(component).toHaveClass('dropdown-open')
    })

    // Act
    const firstItem = items.querySelector('.dropdown-item')

    firstItem.click()

    // Assert
    await waitFor(() => {
      expect(firstItem.querySelector('.icon')).toBeInTheDocument()
      expect(component).not.toHaveClass('dropdown-open')
      expect(value).toHaveTextContent(firstItem.textContent)
    })
  })

  it('should have keyboard interactivity', async () => {
    // Assert
    expect(component).not.toHaveClass('dropdown-keyboard')

    // Act
    fireEvent.keyPress(component, { key: 'Enter', code: 'Enter' })

    // Assert
    await waitFor(() => {
      expect(component).toHaveClass('dropdown-keyboard')
    })

    // Act
    const firstItem = items.querySelector('.dropdown-item')
    fireEvent.keyPress(firstItem, { key: 'Enter', code: 'Enter' })

    // Assert
    await waitFor(() => {
      expect(firstItem.querySelector('.icon')).toBeInTheDocument()
      expect(component).not.toHaveClass('dropdown-open')
      expect(value).toHaveTextContent(firstItem.textContent)
    })
  })

  it('should close on Esc keypress', async () => {
    // Assert
    expect(component).not.toHaveClass('dropdown-open')

    // Act
    component.click()

    // Assert
    await waitFor(() => {
      expect(component).toHaveClass('dropdown-open')
    })

    // Act
    fireEvent.keyDown(component, { key: 'Escape', code: 'Escape' })

    // Assert
    await waitFor(() => {
      expect(component).not.toHaveClass('dropdown-open')
    })
  })
})
