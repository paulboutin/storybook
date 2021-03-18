import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'

export const defaultTitle = 'Headline'
export const defaultText = 'Subtext'
export const defaultLabel = 'Call to Action'

export const ClosingCTA = ({
  type,
  image,
  title,
  text,
  className,
  children
}) => (
  <section
    className={classNames('closing-cta', `closing-cta-${type}`, className)}
  >
    <div className='container'>
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
        <h3 className='text-h2' dangerouslySetInnerHTML={{ __html: title }} />
        {text && (
          <p
            className='closing-cta-text'
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
        {children}
      </div>
    </div>
  </section>
)

const DefaultClosingCTA = ({ type, image, title, text, label, className }) => (
  <ClosingCTA
    type={type}
    image={image}
    title={title}
    text={text}
    className={className}
  >
    <Button type='secondary' label={label} link />
  </ClosingCTA>
)

export default DefaultClosingCTA
