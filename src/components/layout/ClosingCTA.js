import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'

const ClosingCTA = ({ type, image }) => (
  <section className={classNames('closing-cta', `closing-cta-${type}`)}>
    <div className='container'>
      {type === '2col' && (
        <img
          src={image}
          alt='Closing CTA image'
          className='closing-cta-image'
        />
      )}

      {type === 'bgi' && (
        <>
          <img
            src={image}
            alt='Closing CTA background image'
            className='closing-cta-background-image'
          />
          <div className='closing-cta-overlay' />
        </>
      )}

      <div className='closing-cta-content'>
        <h1>
          {type === '2col'
            ? 'Open online in about 10 minutes'
            : 'Together, we can safeguard the environment and the future of our planet.'}
        </h1>
        {type !== '2col' && <p className='closing-cta-text'>Type something</p>}
        <Button type='tertiary' label='Call to Action' link />
      </div>
    </div>
  </section>
)

export default ClosingCTA
