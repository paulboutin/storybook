import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'
import Image from '../base/Image'
import Input from '../base/Input'
import Link from '../base/Link'
import Accordion from '../base/Accordion'
import navigation from '../../config/navigation'

const NavigationBanner = () => (
  // renders top banner (dark green)
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

const DesktopNavigationCategories = () => {
  // renders desktop version of navigation menus (header categories and products bars)
  // if category is a directLink, does not render product submenu, and renders link as <a> tag

  return (
    <div className='navigation-header-categories'>
      {navigation.categories.map((category, categoryIndex) => {
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
}

const DesktopNavigationDropdowns = () => {
  // renders navigation dropdowns for Desktop.
  // renders one dropdown-section for each category, with corresponding Promo.

  return (
    <div className='navigation-dropdowns'>
      <div className='navigation-container'>
        {navigation.categories.map(({ Promo, ...category }, categoryIndex) => (
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
                {product.items.map(({ text, href }, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={href}
                    className='navigation-dropdown-item'
                  >
                    {text}
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
}

const MobileNavigationMenus = () => {
  // renders navigation menus for Mobile devices.
  // TODO: renders only first CTA it finds.
  const CTA = navigation.categories.find(category => category.CTA).CTA

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

          {navigation.categories.map((category, index) => (
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

          {navigation.links.map(({ text, href }, index) => (
            <div key={index} className='navigation-main-menu-link'>
              <a href={href}>{text}</a>
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

          <Link href='#'>Forgot password</Link>
          <Button link href='#' type='primary' label='Sign In' />
          <div className='navigation-divider' />
          <Link href='#' standalone>
            Open an Account
          </Link>
        </div>
      </aside>

      {navigation.categories.map((category, categoryIndex) => (
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
                {product.items.map(({ text, href }, itemIndex) => (
                  <div key={itemIndex}>
                    <a href={href}>{text}</a>
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

export const NavigationPromo = ({
  image,
  alt,
  title,
  text,
  className,
  children
}) => {
  // renders Promo element for category dropdowns (Desktop)
  return (
    <article className={classNames('navigation-promo', className)}>
      {image && <Image src={image} alt={alt} ratio='16:9' />}
      <p className='font-bold'>{title}</p>
      <p className='text-sm'>{text}</p>
      {children}
    </article>
  )
}

const Navigation = ({ sticky }) => {
  // main Navigation component
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
              {navigation.categories.map(({ CTA, ...category }, idx) => (
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
            <Button type='primary' label='Sign In' link href='#' />
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
