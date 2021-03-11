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
            'Compare Checking',
            'Any Deposit Checking',
            '1% for the Planet Checking',
            'Premier Checking',
            'Mobile and Online Banking',
            'Financial Education'
          ]
        },
        {
          id: 'savings',
          name: 'Savings',
          items: [
            'Compare Savings',
            'Classic Savings',
            'Choice Money Market Savings',
            'Certificated of Deposits (CDs)',
            'Flexible-Term CD',
            'Premium CD',
            'IRA CDs',
            'Flexible IRA CDs',
            'Premium IRA CDs',
            'IRA Add-On CDs'
          ]
        },
        {
          id: 'credit-cards',
          name: 'Credit Cards',
          items: [
            'Compare Cards',
            'Cash Back Card',
            'Platinum Card',
            'Secured Card',
            'Rewards Program'
          ]
        },
        {
          id: 'consumer-loans',
          name: 'Consumer Loans',
          items: [
            'Car Loans',
            'RV Loans',
            'Boat Loans',
            'Personal Loans',
            'Pay Online'
          ]
        },
        {
          id: 'home-loans',
          name: 'Home Loans',
          items: [
            'Shop Rates',
            'Buy a Home',
            'Refinance a Home',
            'Open a Home Equity Line',
            'Find a Mortgage Specialist',
            'Make an Online Payment'
          ]
        },
        {
          id: 'investing',
          name: 'Investing',
          items: ['Online Investing']
        }
      ],
      CTA: () => <Button type='tertiary' label='Apply Now' link />,
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
            'Compare Checking',
            'Classic Business Checking',
            'Any Deposit for Business',
            'Choice Business Checking'
          ]
        },
        {
          id: 'savings',
          name: 'Savings',
          items: [
            'Compare Savings',
            'Classic Business Savings',
            'Business Money Market',
            "Business CD's"
          ]
        },
        {
          id: 'credit-cards',
          name: 'Credit Cards',
          items: [
            'Compare Cards',
            'Business Rewards Card',
            'Business Credit Card',
            'Commercial Card'
          ]
        },
        {
          id: 'lending',
          name: 'Lending',
          items: [
            'Line of Credit',
            'Term Loans',
            'SBA Loans',
            'Equipment Leasing',
            'Agriculture Financing',
            'Commercial Real Estate'
          ]
        },
        {
          id: 'business-services',
          name: 'Business Services',
          items: [
            'Treasury Management',
            'Cash Management',
            'Payroll Services',
            'Merchant Services'
          ]
        }
      ],
      CTA: () => <Button type='tertiary' label='Apply Now' link />,
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
          id: 'solutions',
          name: 'Solutions',
          items: [
            'Asset-Based Lending',
            'Dealer Financial Services',
            'Equipment Financing',
            'Fraud Prevention',
            'Global Trade Solutions',
            'Risk Management',
            'Syndicated Loans',
            'Treasury Management'
          ]
        },
        {
          id: 'treasury-management',
          name: 'Treasury Management',
          items: [
            'Payables',
            'Receivables',
            'Commercial Card',
            'Liquidity Management',
            'Information Reporting'
          ]
        },
        {
          id: 'international-banking',
          name: 'International Banking',
          items: [
            'Global Capabilities',
            'Global Trade Solutions',
            'International Cash Management',
            'Standby Letters of Credit',
            'Supply Chain Management'
          ]
        },
        {
          id: 'industry-insights',
          name: 'Industry Insights',
          items: [
            'Technology',
            'Healthcare',
            'Food and Agribusiness',
            'Wine and Beverage',
            'Commercial Real Estate',
            'Government and Public Sector',
            'Religious Institutions',
            'Title and Escrow',
            'Environmental, Social, and Governance'
          ]
        }
      ],
      CTA: () => <Button type='tertiary' label='Get in Touch' link />,
      Promo: () => (
        <NavigationPromo
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
          id: 'approach',
          name: 'Our Approach',
          items: ['Overview', 'About Us']
        },
        {
          id: 'solutions',
          name: 'Solutions',
          items: [
            'Investment Advisory and Brokerage',
            'Global Investment Management and Fiduciary',
            'Insurance and Protection',
            'Impact Solutions',
            'Banking Solutions',
            'Online Investing'
          ]
        },
        {
          id: 'who-we-serve',
          name: 'Who we serve',
          items: [
            'Individual and Families',
            'Private Business and Entrepreneurs',
            'Ultra High Net Worth',
            'International'
          ]
        },
        {
          id: 'insights',
          name: 'Insights',
          items: [],
          directLink: '#'
        }
      ],
      CTA: () => <Button type='tertiary' label='Online Portfolio' link />,
      Promo: () => (
        <NavigationPromo
          image='/img/trees.png'
          title='Lorem ipsum 4'
          text='Dolor sit amet, consectetur adipisicing elit. Distinctio, ut.'
        />
      )
    },
    {
      name: 'About Us',
      id: 'about',
      products: [],
      directLink: '#',
      CTA: null,
      Promo: null
    }
  ],
  links: ['Help Center', 'Locations', 'Search']
}

const NavigationBanner = () => (
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
)

const DesktopNavigationCategories = () => (
  <div className='navigation-header-categories'>
    {menuConfig.categories.map((category, categoryIndex) => {
      if (category.directLink) {
        return (
          <a
            key={categoryIndex}
            className='navigation-header-category'
            href={category.directLink}
          >
            {category.name}
          </a>
        )
      }

      return (
        <React.Fragment key={categoryIndex}>
          <div
            data-cta-action={`#cta-${category.id}`}
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
      )
    })}
  </div>
)

const DesktopNavigationDropdowns = () => (
  <div className='navigation-dropdowns'>
    <div className='navigation-container'>
      {menuConfig.categories.map(({ Promo, ...category }, categoryIndex) => (
        <div
          key={categoryIndex}
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
      ))}
    </div>
  </div>
)

const MobileNavigationMenus = () => {
  const CTA = menuConfig.categories.find(category => category.CTA).CTA

  return (
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
  )
}

const NavigationPromo = ({ image, alt, title, text, className, children }) => (
  <article className={classNames('navigation-promo', className)}>
    {image && <Image src={image} alt={alt} ratio='16:9' />}
    <p className='font-bold'>{title}</p>
    <p className='text-sm'>{text}</p>
    {children}
  </article>
)

const Navigation = ({ sticky }) => {
  return (
    <nav className={classNames('navigation', { sticky })}>
      <NavigationBanner />

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

          <DesktopNavigationCategories />

          <div className='navigation-header-buttons'>
            <div className='navigation-header-cta-actions'>
              {menuConfig.categories.map(({ CTA, ...category }, idx) => (
                <div
                  key={idx}
                  id={`cta-${category.id}`}
                  className={classNames('navigation-header-cta-wrapper', {
                    'navigation-cta-active': idx === 0
                  })}
                >
                  {CTA && <CTA />}
                </div>
              ))}
            </div>
            <Button type='primary' label='Sign In' link />
          </div>
        </div>
      </header>

      <div className='navigation-subheader' />

      <DesktopNavigationDropdowns />

      <MobileNavigationMenus />
    </nav>
  )
}

export default Navigation
