import React from 'react'
import classNames from 'classnames'

const icons = {
  danger: '/icons/img/alert-yellow.png',
  success: '/icons/img/alert-green.png',
  info: '/icons/img/alert-blue.png',
  warning: '/icons/img/alert-yellow.png'
}

const Alert = ({ type, title, text }) => {
  const iconSrc = icons[type]

  return (
    <div className={classNames('alert', `alert-${type}`)}>
      <div className='container'>
        <span className='icon-wrapper'>
          <img src={iconSrc} alt={type} />
        </span>
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
}

export default Alert
