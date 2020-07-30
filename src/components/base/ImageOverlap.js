import React from 'react'
import classNames from 'classnames'
import Image from './Image'

const ImageOverlap = ({ images, position, color, className }) => (
  <div
    className={classNames(
      'image-overlap',
      `image-overlap-${position}`,
      { [`image-overlap-${color}`]: !!color },
      className
    )}
  >
    {color ? (
      <div className='image-overlap-square' />
    ) : (
      <Image
        src={[images[1]]}
        alt='Secondary image'
        ratio='1:1'
        className='image-overlap-square'
      />
    )}

    <Image
      src={[images[0]]}
      alt='Primary image'
      ratio='1:1'
      className='image-overlap-square'
    />
  </div>
)

export default ImageOverlap
