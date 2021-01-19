import React from 'react'
import classNames from 'classnames'

const Alert = ({ type, title, text }) => (
  <div className={classNames('alert', `alert-${type}`)}>
    <div className='container'>
      <i className='icon icon-error' />
      <div className='alert-content-wrapper'>
        <div className='alert-header'>
          <p className='alert-title'>{title}</p>
          <i className='icon icon-close' />
        </div>
        <p
          className='alert-content'
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  </div>
)

export default Alert
