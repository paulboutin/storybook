import React from 'react'
import classNames from 'classnames'

const Image = ({ src, alt, ratio, className }) =>
  ratio === 'Auto' ? (
    <img src={src} alt={alt} className={classNames('image-block', className)} />
  ) : (
    <div className={classNames('image-block', `ratio-${ratio}`, className)}>
      <img src={src} alt={alt} />
    </div>
  )

export default Image
