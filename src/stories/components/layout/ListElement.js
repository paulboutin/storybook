import React from 'react'
import classNames from 'classnames'
import { array } from '@storybook/addon-knobs'

const defaultItems = [
  '$0 monthly service charge with any deposit per statement',
  'Free access to Online Banking in our mobile app',
  'No minimum balance',
  'No direct deposit required'
]

const headerText = {
  lead: 'Features',
  heading: 'Here are the basics',
  text: 'Manage your money while contributing with the planet'
}

const ListElementItems = ({ items, listClass = 'check' }) => (
  <ul className='list-element-items'>
    {items.map((item, index) => (
      <li key={index} className={classNames('list-element-item', listClass)}>
        {item}
      </li>
    ))}
  </ul>
)

const ListElementContent = ({
  headerText,
  items,
  altLayout = false,
  listClass
}) => (
  <div
    className={altLayout ? 'list-element-content alt' : 'list-element-content'}
  >
    <div className='list-element-header'>
      <p className='list-element-header-lead'>{headerText.lead}</p>
      {!altLayout && <span className='list-element-header-spacer' />}
      <div className='list-element-header-text-block'>
        <h2 className='list-element-heading'>{headerText.heading}</h2>
        <p className='list-element-header-text'>{headerText.text}</p>
      </div>
    </div>
    <ListElementItems items={items} listClass={listClass} />
  </div>
)

export const ListElementWithHeader = () => (
  <section className='list-element-container'>
    <ListElementContent
      headerText={headerText}
      items={array('Items', defaultItems)}
    />
  </section>
)

export const ListElementWithImage = () => (
  <section className='list-element-container'>
    <img
      className='list-element-image'
      src='http://via.placeholder.com/600'
      alt='Image'
    />
    <ListElementContent
      headerText={headerText}
      items={array('Items', defaultItems)}
      altLayout
    />
  </section>
)
