import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'
import ImageOverlap from '../base/ImageOverlap'

const defaultTitle = 'The strongest environmental stance of any major bank.'
const defaultText =
  "Our policies are 100% transparent because we're proud of what we finance and what we don't"

const Highlight = ({
  title,
  text,
  type,
  images,
  reverse,
  color,
  eyebrow,
  children
}) => (
  <section className={classNames('highlight container', { reverse })}>
    {type === 'single' ? (
      <Image
        src={images[0]}
        alt='Highlight image'
        ratio='1:1'
        className='highlight-img-container'
      />
    ) : (
      <ImageOverlap
        images={images}
        position={reverse ? 'left' : 'right'}
        color={color}
        className='highlight-img-container'
      />
    )}

    <article className='highlight-content-container'>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>

      {text && <p className='highlight-text'>{text}</p>}

      {children}
    </article>
  </section>
)

export default Highlight
