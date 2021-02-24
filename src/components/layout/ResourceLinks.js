import React from 'react'
import Eyebrow from '../base/Eyebrow'
import Link from '../base/Link'

export const defaultItems = [
  'Savings & Money Markets',
  'Business CDs',
  'Account Services',
  'Payroll Services',
  'Credit Cards',
  'Mortgages',
  'International Banking'
]

export const defaultContent = {
  eyebrow: 'Eyebrow',
  title: 'Headline',
  text: 'Lorem ipsum'
}

export const ResourceLinksDoubleColumns = ({ items }) => {
  const left = items.slice(0, Math.ceil(items.length / 2))
  const right = items.slice(Math.ceil(items.length / 2))

  return (
    <div className='row'>
      <div className='col-xs-12 col-md-6'>
        {left.map((item, idx) => (
          <Link key={idx} href='#'>
            {item}
          </Link>
        ))}
      </div>

      <div className='col-xs-12 col-md-6'>
        {right.map((item, idx) => (
          <Link key={idx} href='#'>
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

export const ResourceLinksSingleColumn = ({ items }) => {
  return (
    <div className='row'>
      <div className='col-xs-12'>
        {items.map((item, idx) => (
          <Link key={idx} href='#'>
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

const ResourceLinks = ({ eyebrow = {}, title, text, children }) => (
  <section className='resource-links container'>
    <div className='row'>
      <div className='col-xs-12 col-sm-6 col-md-4'>
        {eyebrow.enable && <Eyebrow>{eyebrow.text}</Eyebrow>}
        <h3
          className='resource-links-title text-h2'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {text && (
          <p
            className='resource-links-text'
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
      </div>

      <div className='col-xs-12 col-sm-5 col-sm-offset-1 col-md-7'>
        {children}
      </div>
    </div>
  </section>
)

export default ResourceLinks
