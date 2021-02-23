import React from 'react'
import Button from '../base/Button'
import Modal from '../base/Modal'
import DropdownNative from '../base/DropdownNative'

const defaultItems = [
  'Arizona',
  'California',
  'Colorado',
  'Idaho',
  'Iowa',
  'Kansas',
  'Missouri',
  'Nebraska',
  'New Mexico',
  'North Dakota',
  'Oklahoma',
  'Oregon',
  'South Dakota',
  'Utah',
  'Washington',
  'Wisconsin',
  'Wyoming'
]

export const SelectStatePopup = ({ title, children }) => {
  return (
    <Modal title={title}>
      {children}
      <form className='popup-controls'>
        <div className='action-wrapper'>
          <DropdownNative
            label='Select your state'
            items={defaultItems}
            className='text-xs'
          />
          <Button label='Continue' type='primary' className='modal-action' />
        </div>
      </form>
    </Modal>
  )
}

const DefaultPopup = () => {
  return (
    <SelectStatePopup title='Tell us where you live'>
      <p className='text-sm'>
        Choose your state of legal residence. We can then give you information
        about the products and services available in your area.
      </p>
      <p className='text-sm'>
        Note: Bank of the West has branches only in the states listed in the
        drop-down. At this time, we only open accounts for individuals and
        businesses in these states.
      </p>
    </SelectStatePopup>
  )
}

export default DefaultPopup
