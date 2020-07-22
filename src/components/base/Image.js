import React from 'react'
import classNames from 'classnames'

const Image = ({ src, alt, ratio, className }) =>
  ratio === 'Auto' ? (
    <img src={src} alt={alt} className={className} />
  ) : (
    <div className={classNames(`ratio-${ratio}`, className)}>
      <img src={src} alt={alt} />
    </div>
  )

export default Image
