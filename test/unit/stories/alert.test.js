import React from 'react'
import { waitFor } from '@testing-library/dom'
import { mount } from '../utils'
import Alert from '../../../src/components/layout/Alert'
import fn from '../../../src/js/components/alert'

describe('Alert component', () => {
  it('should be interactive', async () => {
    jest.useFakeTimers()

    // Arrange
    const alert = mount(
      <Alert type='danger' text='lorem ipsum' title='test title' />,
      fn
    )
    const close = alert.querySelector('.icon-close')

    // Assert
    expect(alert).not.toHaveClass('alert-closed')

    // Act
    close.click()

    // Assert
    await waitFor(() => {
      expect(alert).toHaveClass('alert-closed')
    })

    jest.advanceTimersByTime(1000)

    await waitFor(() => {
      expect(document.querySelector('.alert')).toBeFalsy()
    })
  })
})
