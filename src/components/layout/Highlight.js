import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Link from '../base/Link'

const Highlight = ({ contentPosition, type, overlap, color, images }) => (
  <div
    className={classNames(
      'highlight container',
      contentPosition === 'Left' ? 'highlight-left' : 'highlight-right',
      type === 'Single' ? 'highlight-single' : 'highlight-overlap',
      type === 'Overlap' &&
        overlap === 'Color' &&
        (color === 'Secondary' ? 'highlight-secondary' : 'highlight-primary')
    )}
  >
    <div className='highlight-img-container'>
      {type === 'Single' ? (
        <img src={[images[0]]} alt='Highlight image' />
      ) : overlap === 'Color' ? (
        <>
          <div />
          <img src={[images[0]]} alt='Highlight image' />
        </>
      ) : (
        <>
          <img src={[images[0]]} alt='Secondary highlight image' />

          <img src={[images[1]]} alt='Primary highlight image' />
        </>
      )}
    </div>

    <div className='highlight-content-container'>
      <Eyebrow text='Bank for the planet' />
      <h4>The strongest environmental stance of any major bank.</h4>

      <p className='highlight-text'>
        Our policies are 100% transparent because we're proud of what we finance
        and what we don't.
      </p>

      <Link icon='long-arrow-alt-right' className='highlight-link'>
        Your choice of bank matters
      </Link>
    </div>
  </div>
)

export default Highlight
