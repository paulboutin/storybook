import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../base/Eyebrow'

const ListElementImage = ({ image }) => (
  <div className='list-element-image-wrapper'>
    <img className='list-element-image' src={image.src} alt={image.alt} />
  </div>
)

const ListElementItems = ({ items, listClass = 'fa-check-circle' }) => (
  <ul className='list-element-items'>
    {items.map((item, index) => (
      <li key={index} className={classNames('list-element-item fa', listClass)}>
        {item}
      </li>
    ))}
  </ul>
)

const ListElement = ({ image, items, headerText, altLayout }) => (
  <section className='list-element'>
    <div className='container'>
      {image && <ListElementImage image={image} />}
      <div
        className={classNames('list-element-content', altLayout ? 'alt' : '')}
      >
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