import React from 'react'
import classNames from 'classnames'

export const ratios = ['auto', '4:3', '16:9', '1:1', '3:4', '9:16']

const Image = ({ src, alt, ratio = ratios[0], className }) => (
  <div className={classNames(`ratio-${ratio}`, className)}>
    <img src={src} alt={alt} />
  </div>
)

export default Image
