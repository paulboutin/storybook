import React from 'react'
import { waitFor } from '@testing-library/dom'
import { mount } from '../utils'

import { Input } from '../../../src/stories/components/base/Input'
import fn from '../../../src/js/components/input'

describe('Input component', () => {
  it('should be interactive', async () => {
    // Arrange
    const component = mount(<Input />, fn)

    // Assert
    expect(component).not.toHaveClass('active')

    // Act
    component.querySelector('.input-control').focus()

    // Assert
    await waitFor(() => {
      expect(component).toHaveClass('active')
    })

    // Act
    component.querySelector('.input-control').blur()

    // Assert
    await waitFor(() => {
      expect(component).not.toHaveClass('active')
    })
  })

  describe('type: password', () => {
    it('should toggle type on click', async () => {
      // Arrange
      const component = mount(<Input type='password' />, fn)
      const control = component.querySelector('.input-control')
      const pwdControl = component.querySelector('.input-password-control')

      // Assert
      expect(control.type).toBe('password')
      expect(pwdControl).not.toHaveClass('visible')

      // Act
      pwdControl.click()

      // Assert
      await waitFor(() => {
        expect(control.type).toBe('text')
        expect(pwdControl).toHaveClass('visible')
      })

      // Act
      component.querySelector('.input-password-control').click()

      // Assert
      await waitFor(() => {
        expect(control.type).toBe('password')
        expect(pwdControl).not.toHaveClass('visible')
      })
    })
  })
})
