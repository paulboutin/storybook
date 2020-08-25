import React from 'react'
import Button from '../base/Button'
import Accordion from '../base/Accordion'

const Navigation = () => {
  const menu = {
    categories: [
      {
        name: 'Personal',
        id: 'personal',
        products: [
          {
            name: 'Checking',
            items: [
              'Any Deposit Checking',
              'Premier Checking',
              'Debit Cards',
              'Digital Services',
              'Overdraft Program'
            ]
          },
          {
            name: 'Savings',
            items: ['Saving Accounts', 'Certificate of Deposits', "IRA CD's"]
          },
          {
            name: 'Credit Cards',
            items: [
              'Cash Back Card',
              'Platinum Card',
              'Secured Card',
              'Rewards Program'
            ]
          },
          {
            name: 'Loans',
            items: ['Car Loans', 'RV Loans', 'Boat Loans', 'Personal Loans']
          },
          {
            name: 'Mortgages',
            items: [
              'Mortgage Options',
              'Mortgage Calculators',
              'Mortgage Tips',
              'Service Assistance',
              'Pay Online'
            ]
          }
        ]
      },
      {
        name: 'Small Business',
        id: 'small-business',
        products: [
          {
            name: 'Checking',
            items: [
              'Any Deposit for Business',
              'Classic Business Checking',
              'Choice Business Checking'
            ]
          },
          {
            name: 'Savings',
            items: [
              'Classic Business Savings',
              'Business Money Market',
              "Business CD's"
            ]
          },
          {
            name: 'Credit Cards',
            items: ['Business Rewards Card', 'Business Mastercard']
          },
          {
            name: 'Lending',
            items: [
              'Line of Credit',
              'Term Loans',
              'SBA Loans',
              'Equipment Leasing',
              'Real Estate Lending'
            ]
          },
          {
            name: 'Business Services',
            items: [
              'Treasury Management',
              'Payroll Services',
              'Merchant Services'
            ]
          }
        ]
      },
      {
        name: 'Commercial',
        id: 'commercial',
        products: [
          {
            name: 'Credit & Financing',
            items: ['Lorem Ipsum']
          },
          {
            name: 'Solutions',
            items: ['Lorem Ipsum']
          },
          {
            name: 'Treasury Management',
            items: ['Lorem Ipsum']
          },
          {
            name: 'International Banking',
            items: ['Lorem Ipsum']
          },
          {
            name: 'Industry Insights',
            items: ['Lorem Ipsum']
          }
        ]
      },
      {
        name: 'Wealth',
        id: 'wealth',
        products: [
          {
            name: 'Solutions',
            items: [
              'Planning',
              'Investment',
              'Lending & Credit',
              'Deposit Solutions',
              'Impact Solutions'
            ]
          },
          {
            name: 'Who we serve',
            items: ['Individuals', 'Corporate']
          },
          {
            name: 'Insights',
            items: ['Lorem Ipsum']
          }
        ]
      },
      {
        name: 'Insights',
        id: 'insights',
        products: [
          {
            name: 'Lorem Ipsum',
            items: ['Lorem Ipsum']
          }
        ]
      }
    ],
    links: ['Help Center', 'Locations', 'Search']
  }

  return (
    <nav className='navigation'>
      <header className='navigation-banner'>
        <div className='container'>
          <div className='navigation-banner-location hidden-xs'>
            <i className='icon icon-location' />
            California
          </div>

          <div className='navigation-banner-notice'>
            Learn about our new 1% for the planet account
          </div>

          <div className='navigation-banner-links hidden-xs hidden-sm'>
            Help Center | Locations | Search
          </div>
        </div>
      </header>

      <header className='navigation-header'>
        <div className='container'>
          <div className='navigation-hamburger'>
            <i className='icon icon-close' />
          </div>

          <a href='/'>
            <img
              src='/img/logo.svg'
              alt='Bank of the West logo'
              className='navigation-logo'
            />
          </a>
        </div>
      </header>

      <header className='navigation-subheader'></header>

      <aside className='navigation-menu'>
        <div className='navigation-buttons'>
          <Button type='secondary' label='Apply Now' />
          <Button type='primary' label='Sign In' />
        </div>

        {menu.categories.map((category, index) => (
          <div
            key={index}
            className='navigation-menu-category'
            data-menu={`#${category.id}`}
          >
            <span>{category.name}</span>
            <i className='icon icon-chevron-right' />
          </div>
        ))}

        <div className='navigation-divider' />

        {menu.links.map((link, index) => (
          <div key={index} className='navigation-menu-link'>
            <a href='#'>{link}</a>
          </div>
        ))}
      </aside>

      {menu.categories.map((category, categoryIndex) => (
        <aside
          key={categoryIndex}
          id={category.id}
          className='navigation-category-menu'
        >
          <div className='navigation-category-menu-header'>
            <i className='navigation-category-menu-back icon icon-chevron-left' />
            <div>{category.name}</div>
          </div>

          {category.products.map((product, productIndex) => (
            <Accordion key={productIndex} title={product.name}>
              {product.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <a href='#'>{item}</a>
                </div>
              ))}
            </Accordion>
          ))}
        </aside>
      ))}
    </nav>
  )
}

export default Navigation
