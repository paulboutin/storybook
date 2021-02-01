import React from 'react'
import classNames from 'classnames'

const ReturnToTop = ({ side = 'right', showAtPX = '200' }) => {
  return (
    <div className={classNames('return-to-top', side)} data-show-at={showAtPX}>
      <i className='icon icon-arrow-up' />
    </div>
  )
}

export default ReturnToTop
