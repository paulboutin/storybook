import React from 'react'
import { fireEvent, waitFor } from '@testing-library/dom'
import { mount } from '../utils'

import Select from '../../../src/components/base/Select'
import fn from '../../../src/js/components/select'

describe('Select component', () => {
  let component
  let options
  let placeholder
  let value

  beforeEach(() => {
    // Arrange
    component = mount(
      <Select label='Label' options={['Option 1', 'Option 2']} />,
      fn
    )
    options = component.querySelector('.select-options')
    placeholder = component.querySelector('.select-placeholder')
    value = component.querySelector('.select-value')
  })

  it('should have mouse interactivity', async () => {
    // Assert
    expect(component).not.toHaveClass('select-open')
    expect(placeholder).toHaveTextContent('Label')

    // Act
    component.click()

    // Assert
    await waitFor(() => {
      expect(component).toHaveClass('select-open')
    })

    // Act
    const firstOption = options.childNodes[1]

    firstOption.click()

    // Assert
    await waitFor(() => {
      expect(firstOption).toHaveClass('select-option-selected')
      expect(component).not.toHaveClass('select-open')
      expect(value).toHaveTextContent(firstOption.textContent)
    })
  })

  it('should have keyboard interactivity', async () => {
    // Assert
    expect(component).not.toHaveClass('select-keyboard')
    expect(placeholder).toHaveTextContent('Label')

    // Act
    fireEvent.keyPress(component, { key: 'Enter', code: 'Enter' })

    // Assert
    await waitFor(() => {
      expect(component).toHaveClass('select-keyboard')
    })

    // Act
    const firstOption = options.childNodes[1]
    fireEvent.keyPress(firstOption, { key: 'Enter', code: 'Enter' })

    // Assert
    await waitFor(() => {
      expect(firstOption).toHaveClass('select-option-selected')
      expect(component).not.toHaveClass('select-open')
      expect(value).toHaveTextContent(firstOption.textContent)
    })
  })

  it('should close on Esc keypress', async () => {
    // Assert
    expect(component).not.toHaveClass('select-open')
    expect(placeholder).toHaveTextContent('Label')

    // Act
    component.click()

    // Assert
    await waitFor(() => {
      expect(component).toHaveClass('select-open')
    })

    // Act
    fireEvent.keyDown(component, { key: 'Escape', code: 'Escape' })

    // Assert
    await waitFor(() => {
      expect(component).not.toHaveClass('select-open')
    })
  })
})
