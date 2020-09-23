import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'
import Input from '../base/Input'
import Link from '../base/Link'
import Accordion from '../base/Accordion'
import AppCTA from '../base/AppCTA'

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
          <div className='navigation-banner-location'>
            <i className='icon icon-location' />
            California
          </div>

          <div className='navigation-banner-notice hidden-xs'>
            <a href='#'>Learn about our new 1% for the planet account</a>
          </div>

          <div className='navigation-banner-links hidden-xs hidden-sm'>
            <a href='#'>Help Center</a>
            <span className='navigation-link-separator' />
            <a href='#'>Locations</a>
            <span className='navigation-link-separator' />
            <a href='#'>Search</a>
          </div>
        </div>
      </header>

      <header className='navigation-header'>
        <div className='container'>
          <button
            className='hamburger hamburger--spring'
            type='button'
            aria-label='Menu'
            aria-controls='navigation'
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner' />
            </span>
          </button>

          <a href='/'>
            <img
              src='/img/logo.svg'
              alt='Bank of the West logo'
              className='navigation-logo'
            />
          </a>

          <div className='navigation-header-categories'>
            {menu.categories.map((category, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <div
                  data-subheader={`#subheader-${category.id}`}
                  className={classNames('navigation-header-category', {
                    'navigation-header-category-active': categoryIndex === 0
                  })}
                >
                  {category.name}
                </div>

                <header
                  id={`subheader-${category.id}`}
                  className={classNames('navigation-header-products', {
                    'navigation-header-products-active': categoryIndex === 0
                  })}
                >
                  {category.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      data-dropdown={`#dropdown-${category.id}-${productIndex}`}
                      className='navigation-header-product'
                    >
                      <span className='navigation-header-product-name'>
                        {product.name}
                      </span>
                    </div>
                  ))}
                </header>
              </React.Fragment>
            ))}
          </div>

          <div className='navigation-header-buttons'>
            <Button type='ghost' label='Apply Now' link />
            <Button type='primary' label='Sign In' link />
          </div>
        </div>
      </header>

      <div className='navigation-subheader' />

      <div className='navigation-dropdowns'>
        <div className='navigation-container'>
          {menu.categories.map((category, categoryIndex) =>
            category.products.map((product, productIndex) => (
              <div
                key={`${categoryIndex}-${productIndex}`}
                id={`dropdown-${category.id}-${productIndex}`}
                className='navigation-dropdown'
              >
                {product.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href='#'
                    className='navigation-dropdown-item'
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))
          )}

          <article className='navigation-promo'>
            <div className='navigation-promo-content'>
              <h3>Bank Whenever, Wherever</h3>
              <p className='navigation-promo-text'>
                The Bank of the West website and app offer 24/7 access to your
                accounts and balances. With just a few clicks you can sign up.
              </p>
              <AppCTA />
            </div>

            <div className='navigation-promo-image'>
              <img src='http://via.placeholder.com/640' alt='Promo image' />
            </div>
          </article>
        </div>
      </div>

      <div className='navigation-menus'>
        <aside className='navigation-menu navigation-main-menu'>
          <div className='container'>
            <div className='navigation-main-menu-buttons'>
              <Button type='ghost' label='Apply Now' link />
              <Button
                type='primary'
                label='Sign In'
                id='navigation-login-button'
              />
            </div>

            {menu.categories.map((category, index) => (
              <div
                key={index}
                data-menu={`#menu-${category.id}`}
                className='navigation-main-menu-category'
              >
                <span>{category.name}</span>
                <i className='icon icon-chevron-right' />
              </div>
            ))}

            <div className='navigation-divider' />

            {menu.links.map((link, index) => (
              <div key={index} className='navigation-main-menu-link'>
                <a href='#'>{link}</a>
              </div>
            ))}
          </div>
        </aside>

        <aside className='navigation-menu navigation-login-menu'>
          <div className='container'>
            <h2 className='navigation-login-title'>Sign In</h2>

            <Input
              id='navigation-login-username'
              variant='outline'
              type='text'
              label='Username'
              required
            />
            <Input
              id='navigation-login-password'
              variant='outline'
              type='password'
              label='Password'
              required
            />

            <Link>Forgot password</Link>
            <Button type='primary' label='Sign In' />
            <div className='navigation-divider' />
            <Link standalone>Open an Account</Link>
          </div>
        </aside>

        {menu.categories.map((category, categoryIndex) => (
          <aside
            key={categoryIndex}
            id={`menu-${category.id}`}
            className='navigation-menu navigation-category-menu'
          >
            <div className='container'>
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
            </div>
          </aside>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
