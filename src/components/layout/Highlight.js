import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'

const Highlight = ({
  title,
  text,
  type,
  images,
  reverse,
  eyebrow = {},
  children
}) => (
  <section
    className={classNames('container highlight', `highlight-${type}`, {
      reverse
    })}
  >
    <Image
      src={images[0]}
      alt='Highlight image'
      ratio='1:1'
      className='highlight-img-container'
    />

    <article className='highlight-content-container'>
      {eyebrow.enable && <Eyebrow>{eyebrow.text}</Eyebrow>}
      <h2>{title}</h2>

      {text && <p className='highlight-text'>{text}</p>}

      {children}
    </article>
  </section>
)

export default Highlight
