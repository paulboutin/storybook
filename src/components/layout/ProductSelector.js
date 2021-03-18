import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'
import Highlight from './Highlight'

const ProductSelector = ({ items, headline }) => {
  return (
    <section className='product-selector container'>
      <h2 className='product-selector-headline text-h3'>{headline}</h2>
      <div className='product-selector-tabs'>
        {items.map(({ tab }, idx) => (
          <span
            key={idx}
            data-index={idx}
            className={classNames('product-selector-tab', {
              'current active': idx === 0
            })}
          >
            <span className='product-selector-tab-wrapper'>{tab}</span>
          </span>
        ))}
        <span className='product-selector-tab-spacer' />
      </div>
      <div className='product-selector-items'>
        {items.map(({ image, title, text, button, cta }, idx) => (
          <Highlight
            key={idx}
            type='B'
            image={image}
            imageAlt={title}
            title={title}
            text={text}
            reverse
            container={false}
            className={classNames('product-selector-item centered', {
              active: idx === 0
            })}
          >
            <div className='product-selector-actions'>
              {button && (
                <Button
                  type='primary'
                  label={button.text}
                  link
                  href={button.href}
                />
              )}
              {cta && (
                <Button type='tertiary' link href={cta.href} label={cta.text} />
              )}
            </div>
          </Highlight>
        ))}
      </div>
    </section>
  )
}

export default ProductSelector
