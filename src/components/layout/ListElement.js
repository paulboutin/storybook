import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'

export const ListElementItems = ({ items, icon = 'check' }) => (
  <ul className='list-element-items'>
    {items.map((item, index) => (
      <li key={index} className='list-element-item'>
        <i className={`icon icon-${icon}`} />
        {item}
      </li>
    ))}
  </ul>
)

const ListElement = ({ image, items, headerText, type, reversed }) => (
  <section
    className={classNames('list-element', `list-element-${type}`, { reversed })}
  >
    <div className='container'>
      {type === 'image' && (
        <Image
          className='image-block'
          src={image.src}
          alt={image.alt}
          ratio='4:3'
        />
      )}
      <div className='list-element-content'>
        <div className='list-element-header'>
          {headerText.eyebrow.enable && (
            <Eyebrow>{headerText.eyebrow.text}</Eyebrow>
          )}
          <h3
            className='list-element-heading text-h2'
            dangerouslySetInnerHTML={{ __html: headerText.heading }}
          />
          {headerText.text && (
            <p
              className='list-element-header-text'
              dangerouslySetInnerHTML={{ __html: headerText.text }}
            />
          )}
        </div>

        <ListElementItems items={items} />
      </div>
    </div>
  </section>
)

export default ListElement
