import { buildSnapshotTests } from '../utils'

describe('Layout Components', () => {
  const stories = [
    {
      title: 'legal',
      path: 'layout-components--legal-story'
    },
    ...['standard', 'image'].map(type => ({
      title: `content-list ${type}`,
      path: `layout-components-content-list--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    ...['standard', 'background-image', 'carousel'].map(type => ({
      title: `closing-cta ${type}`,
      path: `layout-components-closing-cta--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    ...['spaced', 'full'].map(type => ({
      title: `hero ${type}`,
      path: `layout-components-hero--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    ...['standard', 'accent-green'].map(type => ({
      title: `promo-section ${type}`,
      path: `layout-components-promo-section--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    ...['a', 'b'].map(type => ({
      title: `highlight ${type}`,
      path: `layout-components-content-highlight--highlight-${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    ...['horizontal', 'vertical'].map(type => ({
      title: `card layout ${type}`,
      path: `layout-components-card-layouts--${type}`,
      devices: ['mobile', 'tablet']
    })),
    ...['single-column', 'two-column-background'].map(type => ({
      title: `form ${type}`,
      path: `layout-components-form--${type}`,
      devices: ['mobile']
    })),
    ...['standard', 'alternate'].map(type => ({
      title: `infographic ${type}`,
      path: `layout-components-infographic--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    {
      title: 'faq accordion',
      path: 'layout-components-faq--accordion',
      devices: ['tablet']
    },
    {
      title: 'pull-quote',
      path: 'layout-components--pull-quote',
      devices: ['mobile', 'tablet']
    },
    {
      title: 'popup-video',
      path: 'layout-components--popup-video-story'
    },
    {
      title: 'video-hero',
      path: 'layout-components-hero--video'
    },
    {
      title: 'dropdown-hero',
      path: 'layout-components-hero--dropdown-hero-story'
    },
    {
      title: 'search-hero',
      path: 'layout-components-search--search',
      devices: ['mobile', 'desktop']
    },
    ...['standard', 'a', 'b'].map(type => ({
      title: `resource-links ${type}`,
      path: `layout-components-resource-links--resource-links-${type}`,
      devices: ['mobile', 'tablet']
    })),
    ...['single', 'editorial'].map(type => ({
      title: `carousel ${type}`,
      path: `layout-components-carousels--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    {
      title: 'footer',
      path: 'layout-components--footer-story',
      fullPage: true,
      devices: ['tablet', 'desktop']
    },
    {
      title: 'footer',
      path: 'layout-components--footer-story',
      devices: ['mobile']
    },
    {
      title: 'navigation main menu',
      path: 'layout-components--navigation-story',
      devices: ['mobile', 'tablet'],
      fullPage: true,
      callback: async () => {
        await page.click('.hamburger')
        await page.waitForTransition('.navigation-main-menu')
      }
    },
    {
      title: 'navigation login menu',
      path: 'layout-components--navigation-story',
      devices: ['mobile', 'tablet'],
      fullPage: true,
      callback: async () => {
        await page.click('.hamburger')
        await page.waitForTransition('.navigation-main-menu')
        await page.click('#navigation-login-button')
        await page.waitForTransition('.navigation-login-menu')
      }
    },
    {
      title: 'navigation category menu',
      path: 'layout-components--navigation-story',
      devices: ['mobile', 'tablet'],
      fullPage: true,
      callback: async () => {
        await page.click('.hamburger')
        await page.waitForTransition('.navigation-main-menu')
        await page.click('.navigation-main-menu-category')
        await page.waitForTransition('.navigation-category-menu')
        await page.click('.accordion')
        await page.waitForTransition('.accordion-content')
      }
    },
    {
      title: 'navigation',
      path: 'layout-components--navigation-story',
      devices: ['desktop'],
      fullPage: true,
      callback: async () => {
        await page.hover('.navigation-header-product')
        await page.hover('.navigation-dropdown-item')
      }
    },
    {
      title: 'comparison cards',
      path: 'layout-components-comparison--cards',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'comparison cards highlight',
      path: 'layout-components-comparison--cards',
      devices: ['desktop'],
      'knob-Style': 'Highlight'
    },
    {
      title: 'comparison cards branded',
      path: 'layout-components-comparison--cards',
      devices: ['desktop'],
      'knob-Style': 'Branded'
    },
    {
      title: 'comparison table',
      path: 'layout-components-comparison--table',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'help intro',
      path: 'layout-components--help-intro-story'
    },
    {
      title: 'callout',
      path: 'layout-components--callout-story'
    },
    {
      title: 'alert',
      path: 'layout-components--alert-story',
      devices: ['mobile', 'desktop']
    },
    {
      title: 'product-selector',
      path: 'layout-components--product-selector-story',
      devices: ['mobile', 'desktop']
    },
    {
      title: 'storytelling',
      path: 'layout-components--horizontal-accordion',
      devices: ['mobile', 'desktop']
    }
  ]
  buildSnapshotTests(stories)
})
