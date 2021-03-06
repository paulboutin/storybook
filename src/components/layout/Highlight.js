import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'

const HighlightContent = ({ eyebrow = {}, title, text, children }) => {
  return (
    <article className='highlight-content-container'>
      <div className='highlight-content-wrapper'>
        {eyebrow.enable && <Eyebrow>{eyebrow.text}</Eyebrow>}
        <h3 className='text-h2'>{title}</h3>

        {text && <p className='highlight-text'>{text}</p>}

        {children}
      </div>
    </article>
  )
}

export const Highlight = ({
  alt,
  type,
  image,
  reverse,
  className,
  children
}) => (
  <section
    className={classNames(
      'highlight',
      `highlight-${type}`,
      {
        reverse,
        container: type === 'A'
      },
      className
    )}
  >
    <Image
      src={image}
      alt={alt}
      ratio='1:1'
      className='highlight-img-container'
    />

    {children}
  </section>
)

const DefaultHighlight = ({
  title,
  text,
  type,
  image,
  imageAlt,
  reverse,
  eyebrow = {},
  className,
  children
}) => (
  <Highlight
    type={type}
    image={image}
    alt={imageAlt}
    reverse={reverse}
    className={className}
  >
    <HighlightContent title={title} text={text} eyebrow={eyebrow}>
      {children}
    </HighlightContent>
  </Highlight>
)

export default DefaultHighlight
