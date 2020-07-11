import React from 'react'
import classNames from 'classnames'
import { radios } from '@storybook/addon-knobs'
import { Eyebrow } from '../base/Eyebrow'
import { Link } from '../base/Link'

const Highlight = ({ contentPosition, type, overlap, color }) => (
  <div
    className={classNames(
      'highlight',
      contentPosition === 'Left' ? 'highlight-left' : 'highlight-right',
      type === 'Single' ? 'highlight-single' : 'highlight-overlap',
      type === 'Overlap' &&
        overlap === 'Color' &&
        (color === 'Secondary' ? 'highlight-secondary' : 'highlight-primary')
    )}
  >
    <div className='highlight-img-container'>
      {type === 'Single' ? (
        <img src='http://via.placeholder.com/640' alt='Highlight image' />
      ) : overlap === 'Color' ? (
        <>
          <div />
          <img src='http://via.placeholder.com/640' alt='Highlight image' />
        </>
      ) : (
        <>
          <img
            src='http://via.placeholder.com/640'
            alt='Secondary highlight image'
          />

          <img
            src='http://via.placeholder.com/640'
            alt='Primary highlight image'
          />
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

      <Link href='#' icon='long-arrow-alt-right' className='highlight-link'>
        Your choice of bank matters
      </Link>
    </div>
  </div>
)

export const HighlightStory = () => {
  const type = radios('Type', ['Single', 'Overlap'], 'Overlap')
  let overlap

  if (type === 'Overlap') {
    overlap = radios('Overlap', ['Color', 'Image'], 'Color')
  }

  return (
    <div>
      <Highlight
        contentPosition='Right'
        type={type}
        overlap={overlap}
        color='Primary'
      />
      <Highlight
        contentPosition='Left'
        type={type}
        overlap={overlap}
        color='Secondary'
      />
    </div>
  )
}

HighlightStory.story = {
  name: 'Highlight'
}
