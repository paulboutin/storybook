import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import Modal from '../../../components/base/Modal'
import Button from '../../../components/base/Button'
import Checkbox from '../../../components/base/Checkbox'

export const Base = () => {
  const title = text('Headline', 'Headline')
  const content = text('Text', 'Lorem ipsum')
  const showCheckbox = boolean('Enable Checkbox', true)
  const cancelText = text('Action - Cancel', 'Cancel')
  const continueText = text('Action - Continue', 'Continue')

  return (
    <Modal title={title}>
      <p className='text-sm' dangerouslySetInnerHTML={{ __html: content }} />
      <form className='popup-controls'>
        {showCheckbox && (
          <div className='action-wrapper left'>
            <Checkbox label="Don't show again" />
          </div>
        )}
        <div className='action-wrapper'>
          <Button label={cancelText} type='tertiary' className='modal-cancel' />
          <Button
            label={continueText}
            type='primary'
            className='modal-action'
          />
        </div>
      </form>
    </Modal>
  )
}

export default {
  title: 'Layout Components/Popups',
  parameters: {
    'in-dsm': {
      id: '604f8b6d0df71503e1b58846'
    }
  }
}
