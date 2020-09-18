import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Link from '../base/Link'
import Image from '../base/Image'
import ImageOverlap from '../base/ImageOverlap'

const Highlight = ({ position, type, overlap, color, images }) => (
  <section
    className={classNames('highlight container', `highlight-${position}`)}
  >
    {type === 'Single' ? (
      <Image
        src={images[0]}
        alt='Highlight image'
        ratio='1:1'
        className='highlight-img-container'
      />
    ) : (
      <ImageOverlap
        images={images}
        position={position}
        color={overlap === 'Color' && color}
        className='highlight-img-container'
      />
    )}

    <article className='highlight-content-container'>
      <Eyebrow>Bank for the planet</Eyebrow>
      <h2>The strongest environmental stance of any major bank.</h2>

      <p className='highlight-text'>
        Our policies are 100% transparent because we're proud of what we finance
        and what we don't.
      </p>

      <Link standalone>Your choice of bank matters</Link>
    </article>
  </section>
)

export default Highlight
