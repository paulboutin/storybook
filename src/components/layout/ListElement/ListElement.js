import React from 'react'
import classNames from 'classnames'
import Eyebrow from '../../base/Eyebrow'

const ListElement = ({ imageComponent, headerText, altLayout, children }) => (
  <section className='list-element'>
    <div className='container'>
      {imageComponent}
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
        {children}
      </div>
    </div>
  </section>
)

export default ListElement
