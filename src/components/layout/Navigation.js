import React from 'react'
import classNames from 'classnames'
import Button from '../base/Button'
import Image from '../base/Image'
import Input from '../base/Input'
import Link from '../base/Link'
import Accordion from '../base/Accordion'
import navigation from '../../config/navigation'
import { prefixImagePath } from '../../utils'

const NavigationBanner = ({ banner }) => (
  // renders top banner (dark green)
  <header className='navigation-banner'>
    <div className='container'>
      <div className='navigation-banner-location'>
        <i className='icon icon-location' />
        California
      </div>

      <div className='navigation-banner-notice'>
        {banner.notices.map(({ href, text }, idx) => (
          <a
            className={classNames('navigation-banner-notice-item', {
              'current active': idx === 0
            })}
            key={idx}
            href={href}
          >
            {text}
          </a>
        ))}
      </div>

      <div className='navigation-banner-links'>
        {banner.links.map(({ href, text }, idx, arr) => (
          <React.Fragment key={idx}>
            <a href={href}>{text}</a>
            {idx + 1 < arr.length && (
              <span className='navigation-link-separator' />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </header>
)

const DesktopNavigationCategories = ({ categories, current }) => {
  // renders desktop version of navigation menus (header categories and products bars)
  // if category is a directLink, does not render product submenu, and renders link as <a> tag

  return (
    <div className='navigation-header-categories'>
      {categories.map((category, categoryIndex) => {
        if (!category.products.length) {
          return (
            <a
              key={categoryIndex}
              className={classNames('navigation-header-category', {
                'navigation-header-category-current': category.id === current,
                'navigation-header-category-active': category.id === current
              })}
              href={category.link}
            >
              {category.name}
            </a>
          )
        }

        return (
          <React.Fragment key={categoryIndex}>
            <a
              data-cta-action={`#cta-${category.id}`}
              data-subheader={`#subheader-${category.id}`}
              className={classNames('navigation-header-category', {
                'navigation-header-category-current': category.id === current,
                'navigation-header-category-active': category.id === current
              })}
              href={category.link}
            >
              {category.name}
            </a>

            <header
              id={`subheader-${category.id}`}
              className={classNames('navigation-header-products', {
                'navigation-header-products-active': category.id === current
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

const DesktopNavigationDropdowns = ({ categories, config }) => {
  // renders navigation dropdowns for Desktop.
  // renders one dropdown-section for each category, with corresponding Promo.

  const NavigationColumns = ({ items }) => {
    const { maxPerColumn } = config.dropdowns

    const left = items.slice(0, maxPerColumn)
    const right = items.slice(maxPerColumn)

    return (
      <>
        <div className='navigation-dropdown-column flex-content'>
          {left.map(({ href, text }, idx) => (
            <a key={idx} href={href} className='navigation-dropdown-item'>
              {text}
            </a>
          ))}
        </div>
        <div className='navigation-dropdown-column flex-content'>
          {right.map(({ href, text }, idx) => (
            <a key={idx} href={href} className='navigation-dropdown-item'>
              {text}
            </a>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className='navigation-dropdowns'>
      <div className='navigation-container'>
        {categories.map(({ Promo, ...category }, categoryIndex) => (
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
                <NavigationColumns items={product.items} />
              </div>
            ))}
            {Promo && <Promo />}
          </div>
        ))}
      </div>
    </div>
  )
}

const MobileNavigationMenus = ({ CTA, categories, links, config }) => {
  // renders navigation menus for Mobile devices.
  // TODO: renders only first CTA it finds.

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

          {categories.map((category, index) => {
            if (category.directLink)
              return (
                <div key={index} className='navigation-main-menu-category'>
                  <a href={category.directLink}>{category.name}</a>
                  <i className='icon icon-chevron-right' />
                </div>
              )

            return (
              <div
                key={index}
                data-menu={`#menu-${category.id}`}
                className='navigation-main-menu-category'
              >
                <span>{category.name}</span>
                <i className='icon icon-chevron-right' />
              </div>
            )
          })}

          <div className='navigation-divider' />

          {links.map(({ text, href }, index) => (
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

          <Link href={config.auth.forgot}>Forgot password</Link>
          <Button
            link
            href={config.auth.signIn}
            type='primary'
            label='Sign In'
          />
          <div className='navigation-divider' />
          <Link href={config.auth.open} standalone>
            Open an Account
          </Link>
        </div>
      </aside>

      {categories.map((category, categoryIndex) => {
        if (category.directLink) return null

        return (
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
        )
      })}
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

const Navigation = ({
  imgPath = '/img',
  currentCategory,
  CTA = navigation(imgPath).config.defaultCTA
}) => {
  // main Navigation component
  const nav = navigation(imgPath)

  if (!currentCategory) currentCategory = nav.categories[0].id

  return (
    <nav className='navigation navigation-subheader-visible sticky'>
      <NavigationBanner banner={nav.banner} />

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
              src={prefixImagePath({
                prefix: imgPath,
                src: 'logo.svg'
              })}
              alt='Bank of the West logo'
              className='navigation-logo'
            />
          </a>

          <DesktopNavigationCategories
            categories={nav.categories}
            current={currentCategory}
          />

          <div className='navigation-header-buttons'>
            <div className='navigation-header-cta-actions'>
              {nav.categories.map((category, idx) => (
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
            <Button
              type='primary'
              label='Sign In'
              link
              href={nav.config.auth.signIn}
            />
          </div>
        </div>
      </header>

      <DesktopNavigationDropdowns
        categories={nav.categories}
        config={nav.config}
      />

      <MobileNavigationMenus
        categories={nav.categories}
        config={nav.config}
        links={nav.links}
        CTA={CTA}
      />
    </nav>
  )
}

export default Navigation
