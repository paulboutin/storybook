import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'

const ListElementItems = ({ items, icon = 'check-circle' }) => (
  <ul className='list-element-items'>
    {items.map((item, index) => (
      <li key={index} className='list-element-item'>
        <i className={`icon icon-${icon}`} />
        {item}
      </li>
    ))}
  </ul>
)

const ListElement = ({ image, items, headerText, altLayout }) => (
  <section
    className={classNames('list-element', { 'list-element-alt': altLayout })}
  >
    <div className='container'>
      {image && (
        <Image
          className='image-block'
          src={image.src}
          alt={image.alt}
          ratio='4:3'
        />
      )}
      <div className='list-element-content'>
        <div className='list-element-header'>
          <Eyebrow text={headerText.eyebrow} />
          <div className='list-element-header-text-block'>
            <h2 className='list-element-heading'>{headerText.heading}</h2>
            <p className='list-element-header-text'>{headerText.text}</p>
          </div>
        </div>
        {items && <ListElementItems items={items} />}
      </div>
    </div>
  </section>
)

export default ListElement
