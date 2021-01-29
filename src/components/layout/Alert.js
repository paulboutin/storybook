import React from 'react'
import classNames from 'classnames'

const icons = {
  danger: '/icons/img/alert-red.svg',
  success: '/icons/img/alert-green.svg',
  info: '/icons/img/alert-blue.svg',
  warning: '/icons/img/alert-yellow.svg'
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
