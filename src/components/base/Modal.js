import React from 'react'

const Modal = ({ title, children }) => (
  <article className='modal-wrapper'>
    <div className='modal-overlay'>
      <div className='modal-body col-12 col-sm-8 col-lg-6'>
        <div className='modal-header'>
          <p className='text-h4 font-display'>{title}</p>
          <i className='icon icon-close text-lg modal-cancel' />
        </div>
        <div className='modal-content'>{children}</div>
      </div>
    </div>
  </article>
)

export default Modal
