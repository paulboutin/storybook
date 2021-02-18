import React from 'react'
import Button from '../base/Button'
import Checkbox from '../base/Checkbox'
import Modal from '../base/Modal'

const ThirdPartyPopup = ({ title, children }) => {
  return (
    <Modal title={title}>
      {children}
      <div className='third-party-controls'>
        <Checkbox label="Don't show again" className='show-popup-control' />
        <div className='action-wrapper'>
          <Button label='Cancel' type='tertiary' />
          <Button label='Continue' type='primary' />
        </div>
      </div>
    </Modal>
  )
}

export default ThirdPartyPopup
