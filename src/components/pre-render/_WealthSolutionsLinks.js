import React from 'react'
import { ResourceLinksList } from '../layout/ResourceLinksImage'

const items = [
  {
    text: 'Financial & Wealth Planning',
    href:
      'https://www.bankofthewest.com/wealth-management/our-approach/customized-guidance'
  },
  {
    text: 'Investment Solutions',
    href:
      'https://www.bankofthewest.com/wealth-management/our-solutions/investments'
  },
  {
    text: 'Global Investments & Fiduciary Solutions',
    href:
      'https://www.bankofthewest.com/wealth-management/our-solutions/global-investments-fiduciary-solutions'
  },
  {
    text: 'Impact Solutions',
    href:
      'https://www.bankofthewest.com/wealth-management/our-solutions/impact-solutions'
  },
  {
    text: 'Protection/Insurance',
    href:
      'https://www.bankofthewest.com/wealth-management/our-solutions/insurance'
  },
  {
    text: 'Lending & Credit',
    href:
      'https://www.bankofthewest.com/wealth-management/our-solutions/lending-credit'
  },
  {
    text: 'Strategic Philanthropy',
    href:
      'https://www.bankofthewest.com/wealth-management/our-solutions/philanthropy'
  }
]

const WealthResourceLinksPartial = () => (
  <section className='highlight highlight-A resource-links-image container'>
    <div>
      <h3 className='text-h2'>Beyond your investable assets</h3>

      <p className='highlight-text'>
        Your financial future is more than just a balance sheet. That’s why we
        take a holistic approach to your finances, and tailor solutions to the
        complexity of your situation.
      </p>
    </div>
    <ResourceLinksList items={items} />
  </section>
)

export default WealthResourceLinksPartial
