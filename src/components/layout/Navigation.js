import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'
import Image from '../base/Image'
import Input from '../base/Input'
import Link from '../base/Link'
import Accordion from '../base/Accordion'

const menuConfig = {
  categories: [
    {
      name: 'Personal',
      id: 'personal',
      products: [
        {
          id: 'checking',
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
          id: 'savings',
          name: 'Savings',
          items: ['Saving Accounts', 'Certificate of Deposits', "IRA CD's"]
        },
        {
          id: 'credit-cards',
          name: 'Credit Cards',
          items: [
            'Cash Back Card',
            'Platinum Card',
            'Secured Card',
            'Rewards Program'
          ]
        },
        {
          id: 'loans',
          name: 'Loans',
          items: ['Car Loans', 'RV Loans', 'Boat Loans', 'Personal Loans']
        },
        {
          id: 'mortgages',
          name: 'Mortgages',
          items: [
            'Mortgage Options',
            'Mortgage Calculators',
            'Mortgage Tips',
            'Service Assistance',
            'Pay Online'
          ]
        }
      ],
      Promo: () => (
        <NavigationPromo
          image='/img/trees.png'
          title='Lorem ipsum 1'
          text='Dolor sit amet, consectetur adipisicing elit. Distinctio, ut.'
        />
      )
    },
    {
      name: 'Small Business',
      id: 'small-business',
      products: [
        {
          id: 'checking',
          name: 'Checking',
          items: [
            'Any Deposit for Business',
            'Classic Business Checking',
            'Choice Business Checking'
          ]
        },
        {
          id: 'savings',
          name: 'Savings',
          items: [
            'Classic Business Savings',
            'Business Money Market',
            "Business CD's"
          ]
        },
        {
          id: 'credit-cards',
          name: 'Credit Cards',
          items: ['Business Rewards Card', 'Business Mastercard']
        },
        {
          id: 'lending',
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
          id: 'business-services',
          name: 'Business Services',
          items: [
            'Treasury Management',
            'Payroll Services',
            'Merchant Services'
          ]
        }
      ],
      Promo: () => (
        <NavigationPromo
          className='navigation-promo-green'
          image='/img/trees.png'
          title='Lorem ipsum 2'
          text='Dolor sit amet, consectetur adipisicing elit. Distinctio, ut.'
        >
          <Button type='secondary' label='Button CTA' />
        </NavigationPromo>
      )
    },
    {
      name: 'Commercial',
      id: 'commercial',
      products: [
        {
          id: 'credit-financing',
          name: 'Credit & Financing',
          items: ['Lorem Ipsum']
        },
        {
          id: 'solutions',
          name: 'Solutions',
          items: ['Lorem Ipsum']
        },
        {
          id: 'treasury-management',
          name: 'Treasury Management',
          items: ['Lorem Ipsum']
        },
        {
          id: 'international-banking',
          name: 'International Banking',
          items: ['Lorem Ipsum']
        },
        {
          id: 'industry-insights',
          name: 'Industry Insights',
          items: ['Lorem Ipsum']
        }
      ],
      Promo: () => (
        <NavigationPromo
          image='/img/trees.png'
          title='Lorem ipsum 3'
          text='Dolor sit amet, consectetur adipisicing elit. Distinctio, ut.'
        />
      )
    },
    {
      name: 'Wealth',
      id: 'wealth',
      products: [
        {
          id: 'solutions',
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
          id: 'who-we-serve',
          name: 'Who we serve',
          items: ['Individuals', 'Corporate']
        },
        {
          id: 'insights',
          name: 'Insights',
          items: ['Lorem Ipsum']
        }
      ],
      Promo: () => (
        <NavigationPromo
          image='/img/trees.png'
          title='Lorem ipsum 4'
          text='Dolor sit amet, consectetur adipisicing elit. Distinctio, ut.'
        />
      )
    },
    {
      name: 'Insights',
      id: 'insights',
      products: [
        {
          id: 'lorem-ipsum',
          name: 'Lorem Ipsum',
          items: ['Lorem Ipsum']
        }
      ],
      Promo: () => (
        <NavigationPromo
          image='/img/trees.png'
          title='Lorem ipsum'
          text='Dolor sit amet, consectetur adipisicing elit. Distinctio, ut.'
        />
      )
    }
  ],
  links: ['Help Center', 'Locations', 'Search']
}

const NavigationPromo = ({ image, alt, title, text, className, children }) => (
  <article className={classNames('navigation-promo', className)}>
    {image && <Image src={image} alt={alt} ratio='16:9' />}
    <p className='font-bold'>{title}</p>
    <p className='text-sm'>{text}</p>
    {children}
  </article>
)

const Navigation = ({
  CTA = () => <Button type='tertiary' label='Apply Now' link />
}) => {
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
            {menuConfig.categories.map((category, categoryIndex) => (
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
                      data-dropdown-section={`#dropdown-${category.id}`}
                      data-dropdown-product={`#dropdown-${category.id}-${product.id}`}
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
            <CTA />
            <Button type='primary' label='Sign In' link />
          </div>
        </div>
      </header>

      <div className='navigation-subheader' />

      <div className='navigation-dropdowns'>
        <div className='navigation-container'>
          {menuConfig.categories.map(
            ({ Promo, ...category }, categoryIndex) => (
              <div
                className='navigation-dropdown-section'
                id={`dropdown-${category.id}`}
              >
                {category.products.map((product, productIndex) => (
                  <div
                    key={`${categoryIndex}-${productIndex}`}
                    id={`dropdown-${category.id}-${product.id}`}
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
                ))}
                {Promo && <Promo />}
              </div>
            )
          )}
        </div>
      </div>

      <div className='navigation-menus'>
        <aside className='navigation-menu navigation-main-menu'>
          <div className='container'>
            <div className='navigation-main-menu-buttons'>
              <CTA />
              <Button
                type='primary'
                label='Sign In'
                id='navigation-login-button'
              />
            </div>

            {menuConfig.categories.map((category, index) => (
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

            {menuConfig.links.map((link, index) => (
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

        {menuConfig.categories.map((category, categoryIndex) => (
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
