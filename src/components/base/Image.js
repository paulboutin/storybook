import React from 'react'
import classNames from 'classnames'

const Image = ({ src, alt, ratio = 'auto', className }) => (
  <div className={classNames(`ratio-${ratio}`, className)}>
    <img src={src} alt={alt} />
  </div>
)

export default Image
